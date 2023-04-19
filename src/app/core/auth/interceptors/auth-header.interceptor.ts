import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http'
import { inject } from '@angular/core'
import { TokenStorageService } from '@core/auth/services/token-storage.service'
import { environment } from '@environment/environment'

/**
 * Adds the Bearer token to outgoing requests
 * @param request
 * @param next
 * @returns
 */
export const AuthHeaderInterceptorFn: HttpInterceptorFn = (request: HttpRequest<unknown>, next: HttpHandlerFn) => {
    const accessToken = inject(TokenStorageService).getAccessToken()
    const isApiUrl = request.url.startsWith(environment.apiUrl)

    if (accessToken && isApiUrl) {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
    }

    return next(request)
}
