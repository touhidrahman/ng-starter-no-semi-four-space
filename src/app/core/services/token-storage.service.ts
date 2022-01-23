import { Inject, Injectable } from '@angular/core'
import { User } from '@core/interfaces/user'
import { WINDOW } from '@ng-web-apis/common'

export const USER_KEY = 'user'
export const TOKEN_KEY = 'token'
export const REFRESH_TOKEN_KEY = 'refreshToken'

@Injectable({
    providedIn: 'root',
})
export class TokenStorageService {
    constructor(@Inject(WINDOW) private windowRef: Window) {}

    clear() {
        this.windowRef.sessionStorage.clear()
    }

    saveToken(token: string): void {
        this.windowRef.sessionStorage.removeItem(TOKEN_KEY)
        this.windowRef.sessionStorage.setItem(TOKEN_KEY, token)
    }

    saveRefreshToken(token: string): void {
        this.windowRef.sessionStorage.removeItem(REFRESH_TOKEN_KEY)
        this.windowRef.sessionStorage.setItem(REFRESH_TOKEN_KEY, token)
    }

    saveUser(user: User | null): void {
        this.windowRef.sessionStorage.removeItem(USER_KEY)
        if (user) {
            this.windowRef.sessionStorage.setItem(USER_KEY, JSON.stringify({ ...user, passwordHash: undefined }))
        }
    }

    getToken(): string | null {
        return this.windowRef.sessionStorage.getItem(TOKEN_KEY)
    }

    getRefreshToken(): string | null {
        return this.windowRef.sessionStorage.getItem(REFRESH_TOKEN_KEY)
    }

    getUser(): User | null {
        const user = this.windowRef.sessionStorage.getItem(USER_KEY)
        if (user) {
            return JSON.parse(user)
        }

        return null
    }
}
