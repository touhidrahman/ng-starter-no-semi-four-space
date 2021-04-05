import jwt_decode from 'jwt-decode'
import { LocalStorageService } from 'ngx-webstorage'
import { BehaviorSubject, Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { JwtToken } from '@core/interfaces/jwt-token'
import { LoginResponse } from '@core/interfaces/login-response'
import { User } from '@features/users/interfaces/user'

const endpoint = environment.apiURL + '/auth'

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private loggedIn$$: BehaviorSubject<boolean>

    constructor(private http: HttpClient, private localStorage: LocalStorageService) {
        this.loggedIn$$ = new BehaviorSubject(this.isLoggedIn())
    }

    isLoggedIn$(): Observable<boolean> {
        return this.loggedIn$$.asObservable()
    }

    isLoggedIn(): boolean {
        if (this.hasSavedToken()) {
            const token = this.getToken()
            const decoded = jwt_decode<JwtToken>(token)
            const expiryMilis = Number(decoded.exp) * 1000
            const nowMilis = new Date().getTime()
            return nowMilis <= expiryMilis
        }
        return false
    }

    getUserId(): string {
        return this.localStorage.retrieve('userId') ?? ''
    }

    getToken(): string {
        return this.localStorage.retrieve('token') ?? ''
    }

    login(email: string, password: string): Observable<LoginResponse> {
        return this.http
            .post<LoginResponse>(`${endpoint}/local`, { identifier: email, password })
            .pipe(
                tap((response) => {
                    this.loggedIn$$.next(true)
                    this.saveToken(response)
                }),
            )
    }

    register(name: string, email: string, password: string): Observable<LoginResponse> {
        return this.http
            .post<LoginResponse>(`${endpoint}/local/register`, { name, username: email, email, password })
            .pipe(
                tap((response) => {
                    this.loggedIn$$.next(true)
                    this.saveToken(response)
                }),
            )
    }

    logout(): void {
        this.deleteToken()
        this.loggedIn$$.next(false)
    }

    changePassword(currentPassword: string, newPassword: string, confirmNewPassword: string): Observable<User> {
        return this.http.post<User>(`${environment.apiURL}/custom/change-password`, {
            currentPassword,
            newPassword,
            confirmNewPassword,
        })
    }

    private saveToken(loginResponse: LoginResponse): void {
        this.localStorage.store('token', loginResponse.jwt)
        this.localStorage.store('userId', loginResponse.user.id)
    }

    private deleteToken(): void {
        this.localStorage.clear('token')
        this.localStorage.clear('userId')
    }

    private hasSavedToken(): boolean {
        return Boolean(this.localStorage.retrieve('token'))
    }
}
