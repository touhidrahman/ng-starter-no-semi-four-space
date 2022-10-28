import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http'
import { inject } from '@angular/core'
import { TokenStorageService } from '@core/auth/services/token-storage.service'

export const AuthHeaderInterceptorFn: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
    const accessToken = inject(TokenStorageService).getAccessToken()

    if (accessToken) {
        req = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + accessToken),
        })
    }

    return next(req)
}
