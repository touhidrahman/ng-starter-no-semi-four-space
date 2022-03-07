import { Inject, Injectable } from '@angular/core'
import { WINDOW } from '@ng-web-apis/common'

export const ACCESS_TOKEN_KEY = 'accesToken'
export const REFRESH_TOKEN_KEY = 'refreshToken'
export const REQUSTING_TOKENS_FROM_OTHER_WINDOW = 'requestingToken'
export const TOKEN_SHARING = 'tokenSharing'

@Injectable({
    providedIn: 'root',
})
export class TokenStorageService {
    constructor(@Inject(WINDOW) private windowRef: Window) {
        this.initTokenListener()
        this.fireTokenListener()
    }

    clear() {
        this.windowRef.sessionStorage.clear()
    }

    saveAccessToken(token: string): void {
        this.windowRef.sessionStorage.removeItem(ACCESS_TOKEN_KEY)
        this.windowRef.sessionStorage.setItem(ACCESS_TOKEN_KEY, token)
    }

    saveRefreshToken(token: string): void {
        this.windowRef.sessionStorage.removeItem(REFRESH_TOKEN_KEY)
        this.windowRef.sessionStorage.setItem(REFRESH_TOKEN_KEY, token)
    }

    getAccessToken(): string | null {
        return this.windowRef.sessionStorage.getItem(ACCESS_TOKEN_KEY)
    }

    getRefreshToken(): string | null {
        return this.windowRef.sessionStorage.getItem(REFRESH_TOKEN_KEY)
    }

    private initTokenListener(): void {
        this.windowRef.addEventListener('storage', (event) => {
            const accessToken = this.getAccessToken()
            const refreshToken = this.getRefreshToken()
            if (event.key === REQUSTING_TOKENS_FROM_OTHER_WINDOW && accessToken && refreshToken) {
                this.transferTokens(accessToken, refreshToken)
            }

            if (event.key === TOKEN_SHARING) {
                if (!event.newValue) return
                const data = JSON.parse(event.newValue)
                this.saveAccessToken(data.accessToken)
                this.saveRefreshToken(data.refreshToken)
            }
        })
    }

    private fireTokenListener(): void {
        this.windowRef.localStorage.setItem(REQUSTING_TOKENS_FROM_OTHER_WINDOW, new Date().toString())
        this.windowRef.localStorage.removeItem(REQUSTING_TOKENS_FROM_OTHER_WINDOW)
    }

    private transferTokens(accessToken: string, refreshToken: string): void {
        this.windowRef.localStorage.setItem(TOKEN_SHARING, JSON.stringify({ accessToken, refreshToken }))
        this.windowRef.localStorage.removeItem(TOKEN_SHARING)
    }
}
