import { HttpClient } from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'
import { StateSubject } from '@core/store/state-subject'
import { APP_ENVIRONMENT } from '@environment/app-environment.injector'
import { AppEnvironment } from '@environment/app-environment.interface'
import { User, UserRole } from '@main/users/models/user.model'
import { WINDOW } from '@ng-web-apis/common'
import { Observable, catchError, debounceTime, of, shareReplay, switchMap, tap } from 'rxjs'
import { LoginResponse } from '../interfaces/login-response'
import { LoginPayload } from '../interfaces/login.payload'
import { RegisterPayload } from '../interfaces/register.payload'
import { TokenStorageService } from './token-storage.service'

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private endpoint: string

    user = new StateSubject<User | null>(null)
    accessToken = new StateSubject<string>(this.storage.getAccessToken() ?? '')
    refreshToken = new StateSubject<string>(this.storage.getRefreshToken() ?? '')

    get isLoggedIn(): boolean {
        return Boolean(this.accessToken.value)
    }

    get isAdmin(): boolean {
        return this.user.value?.role === UserRole.ADMIN
    }

    get isModerator(): boolean {
        return this.user.value?.role === UserRole.MODERATOR
    }

    constructor(
        private http: HttpClient,
        private storage: TokenStorageService,
        @Inject(WINDOW) private windowRef: Window,
        @Inject(APP_ENVIRONMENT) private appEnvironment: AppEnvironment,
    ) {
        this.endpoint = `${this.appEnvironment.apiUrl}/auth`
        this.continueAutoloadingUser()
    }

    signUp(data: RegisterPayload): Observable<void> {
        return this.http.post<void>(`${this.endpoint}/register`, data)
    }

    login(data: LoginPayload, returnUrl?: string): Observable<LoginResponse | null> {
        return this.http.post<LoginResponse>(`${this.endpoint}/login`, data).pipe(
            tap((data) => {
                this.setTokens(data.accessToken, data.refreshToken)
                this.windowRef.location.href = returnUrl ?? '/'
            }),
        )
    }

    verifyEmail(token: string): Observable<void> {
        return this.http.post<void>(`${this.endpoint}/verify-email/${token}`, {})
    }

    forgotPassword(email: string): Observable<void> {
        return this.http.post<void>(`${this.endpoint}/forgot-password`, { email })
    }

    resetForgottenPassword(
        token: string,
        password: string,
        passwordConfirmation: string,
    ): Observable<void> {
        return this.http.post<void>(`${this.endpoint}/reset-password/${token}`, {
            password,
            passwordConfirmation,
        })
    }

    changePassword(password: string, passwordConfirmation: string): Observable<void> {
        return this.http.post<void>(`${this.endpoint}/change-password`, {
            password,
            passwordConfirmation,
        })
    }

    setTokens(accessToken: string, refreshToken = '') {
        this.storage.saveAccessToken(accessToken)
        this.storage.saveRefreshToken(refreshToken)
        this.accessToken.next(accessToken)
        this.refreshToken.next(refreshToken)
    }

    deleteTokens() {
        this.storage.clear()
        this.accessToken.next('')
        this.refreshToken.next('')
    }

    signOut() {
        this.deleteTokens()
        this.user.next(null)
        this.windowRef.location.href = '/'
    }

    getLoggedInUser$(): Observable<User | null> {
        return this.http.get<User>(`${this.endpoint}/me`).pipe(
            catchError(() => {
                this.user.next(null)
                return of(null)
            }),
            shareReplay({ bufferSize: 1, refCount: true }),
        )
    }

    private continueAutoloadingUser() {
        this.accessToken.value$
            .pipe(
                debounceTime(100),
                switchMap((accessToken) => {
                    if (accessToken && this.user.value === null) {
                        return this.getLoggedInUser$()
                    }
                    return of(null)
                }),
            )
            .subscribe({
                next: (user) => this.user.next(user),
            })
    }
}
