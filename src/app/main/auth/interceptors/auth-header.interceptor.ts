import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http'
import { inject } from '@angular/core'
import { environment } from '@environment/environment'
import { TokenStorageService } from '@main/auth/services/token-storage.service'

/**
 * Adds the Bearer token to outgoing requests
 * @param request
 * @param next
 * @returns
 */
export const AuthHeaderInterceptorFn: HttpInterceptorFn = (
    request: HttpRequest<unknown>,
    next: HttpHandlerFn,
) => {
    const accessToken = inject(TokenStorageService).getAccessToken()
    const isApiUrl = request.url.startsWith(environment.apiUrl)
    let changedRequest = request

    if (accessToken && isApiUrl) {
        changedRequest = request.clone({
            setHeaders: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
    }

    return next(changedRequest)
}
