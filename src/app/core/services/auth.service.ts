import { HttpClient } from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'
import { AppConfig, APP_CONFIG } from '@core/config/app-config'
import { LoginResponse } from '@core/interfaces/login-response'
import { User } from '@core/interfaces/user'
import { WINDOW } from '@ng-web-apis/common'
import { Observable, tap } from 'rxjs'
import { StateSubject } from 'rxjs-state-subject'
import { LoginPayload } from '../interfaces/login.payload'
import { RegisterPayload } from '../interfaces/register.payload'
import { TokenStorageService } from './token-storage.service'

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private endpoint: string

    user = new StateSubject<User | null>(this.storage.getUser())
    token = new StateSubject<string>(this.storage.getToken() ?? '')
    refreshToken = new StateSubject<string>('')

    constructor(
        private http: HttpClient,
        private storage: TokenStorageService,
        @Inject(WINDOW) private wnd: Window,
        @Inject(APP_CONFIG) private appConfig: AppConfig,
    ) {
        this.endpoint = this.appConfig.apiURL
    }

    signUp(data: RegisterPayload): Observable<void> {
        return this.http.post<void>(`${this.endpoint}/signup`, data)
    }

    login(data: LoginPayload): Observable<LoginResponse | null> {
        return this.http.post<LoginResponse>(`${this.endpoint}/login`, data).pipe(
            tap((data) => {
                this.setTokens(data.token, data.refreshToken)
                this.updateUser(data.user)
            }),
        )
    }

    isLoggedIn(): boolean {
        return Boolean(this.token.value) && Boolean(this.user.value)
    }

    setTokens(token: string, refreshToken = '') {
        this.storage.saveToken(token)
        this.storage.saveRefreshToken(refreshToken)
        this.token.next(token)
        this.refreshToken.next(refreshToken)
    }

    deleteTokens() {
        this.storage.clear()
        this.token.next('')
        this.refreshToken.next('')
    }

    signOut() {
        this.deleteTokens()
        this.updateUser(null)
        this.wnd.location.href = '/'
    }

    getUser$(): Observable<User | null> {
        return this.http.get<User>(`${this.endpoint}/me`).pipe(tap((user) => this.updateUser(user)))
    }

    getUser(): User | null {
        return this.user.value
    }

    private updateUser(user: User | null) {
        this.user.update(user)
        this.storage.saveUser(user)
    }
}
