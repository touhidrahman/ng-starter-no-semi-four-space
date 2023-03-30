import { Injectable } from '@angular/core'
import { TokenStorageService } from './token-storage.service'

const TOKEN_SHARING_CHANNEL = 'token-sharing'
const REQUESTING_TOKEN = 'requesting-token'

/**
 * Syncs API tokens between newly opened tabs using BroadcastChannel API
 */
@Injectable({
    providedIn: 'root',
})
export class TokenSharingService {
    private bc = new BroadcastChannel(TOKEN_SHARING_CHANNEL)

    constructor(private tokenStorageService: TokenStorageService) {}

    init() {
        this.addBroadcastChannelListener()
        this.bc.postMessage(REQUESTING_TOKEN)
    }

    private addBroadcastChannelListener() {
        this.bc.addEventListener('message', (event) => {
            if (event.data === REQUESTING_TOKEN) {
                new BroadcastChannel(TOKEN_SHARING_CHANNEL).postMessage({
                    accessToken: this.tokenStorageService.getAccessToken(),
                    refreshToken: this.tokenStorageService.getRefreshToken(),
                })
            } else {
                const { accessToken, refreshToken } = event.data
                accessToken && this.tokenStorageService.saveAccessToken(accessToken)
                refreshToken && this.tokenStorageService.saveRefreshToken(refreshToken)
            }
        })
    }
}
