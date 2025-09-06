import { Injectable, inject } from '@angular/core'
import { WA_WINDOW } from '@ng-web-apis/common'
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from './../auth-injectors'

@Injectable({
    providedIn: 'root',
})
export class TokenStorageService {
    private windowRef = inject(WA_WINDOW)
    private accessTokenKey = inject<string>(ACCESS_TOKEN_KEY)
    private refreshTokenKey = inject<string>(REFRESH_TOKEN_KEY)

    clear() {
        this.windowRef.localStorage.removeItem(this.accessTokenKey)
        this.windowRef.localStorage.removeItem(this.refreshTokenKey)
    }

    saveAccessToken(token: string): void {
        const saved = this.getAccessToken()
        if (saved === token) return
        this.windowRef.localStorage.removeItem(this.accessTokenKey)
        this.windowRef.localStorage.setItem(this.accessTokenKey, token)
    }

    saveRefreshToken(token: string): void {
        const saved = this.getRefreshToken()
        if (saved === token) return
        this.windowRef.localStorage.removeItem(this.refreshTokenKey)
        this.windowRef.localStorage.setItem(this.refreshTokenKey, token)
    }

    getAccessToken(): string | null {
        return this.windowRef.localStorage.getItem(this.accessTokenKey)
    }

    getRefreshToken(): string | null {
        return this.windowRef.localStorage.getItem(this.refreshTokenKey)
    }
}
