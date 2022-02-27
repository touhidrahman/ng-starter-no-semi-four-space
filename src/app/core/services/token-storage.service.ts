import { Inject, Injectable } from '@angular/core'
import { WINDOW } from '@ng-web-apis/common'

export const TOKEN_KEY = 'aceesToken'
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

    getToken(): string | null {
        return this.windowRef.sessionStorage.getItem(TOKEN_KEY)
    }

    getRefreshToken(): string | null {
        return this.windowRef.sessionStorage.getItem(REFRESH_TOKEN_KEY)
    }
}
