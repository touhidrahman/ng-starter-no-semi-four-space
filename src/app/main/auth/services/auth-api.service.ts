import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ApiResponse } from '@core/models/api-response.model'
import { environment } from '@environment/environment'
import { User } from '@main/users/models/user.model'
import { Observable } from 'rxjs'
import { LoginResponse } from '../models/login-response'
import { SignupInput } from '../models/signup-input'

@Injectable({
    providedIn: 'root',
})
export class AuthApiService {
    private readonly apiUrl = `${environment.apiUrl}/v1/auth`

    constructor(private http: HttpClient) {}

    getMe(): Observable<ApiResponse<User>> {
        return this.http.get<ApiResponse<User>>(`${this.apiUrl}/me`)
    }

    isSuperAdmin(userId: string): Observable<ApiResponse<boolean>> {
        return this.http.post<ApiResponse<boolean>>(`${this.apiUrl}/${userId}/is-admin`, {})
    }

    login(email: string, password: string): Observable<ApiResponse<LoginResponse>> {
        return this.http.post<ApiResponse<LoginResponse>>(`${this.apiUrl}/login`, {
            email,
            password,
        })
    }

    register(input: SignupInput): Observable<ApiResponse<User>> {
        return this.http.post<ApiResponse<User>>(`${this.apiUrl}/register`, input)
    }

    refreshAccessToken(refreshToken: string): Observable<ApiResponse<LoginResponse>> {
        return this.http.post<ApiResponse<LoginResponse>>(`${this.apiUrl}/refresh-access-token`, {
            token: refreshToken,
        })
    }

    changePassword(
        currentPassword: string,
        password: string,
        passwordConfirmation: string,
    ): Observable<ApiResponse<boolean>> {
        return this.http.post<ApiResponse<boolean>>(`${this.apiUrl}/change-password`, {
            password,
            currentPassword,
            passwordConfirmation,
        })
    }

    forgotPassword(email: string): Observable<ApiResponse<boolean>> {
        return this.http.post<ApiResponse<boolean>>(`${this.apiUrl}/forgot-password`, { email })
    }

    resetPassword(
        token: string,
        email: string,
        password: string,
    ): Observable<ApiResponse<boolean>> {
        return this.http.post<ApiResponse<boolean>>(`${this.apiUrl}/reset-password/${token}'`, {
            email,
            password,
        })
    }

    logout(): Observable<ApiResponse<boolean>> {
        return this.http.post<ApiResponse<boolean>>(`${this.apiUrl}/logout`, {})
    }

    verifyEmail(token: string): Observable<ApiResponse<boolean>> {
        return this.http.get<ApiResponse<boolean>>(`${this.apiUrl}/verify-email/${token}`)
    }
}
