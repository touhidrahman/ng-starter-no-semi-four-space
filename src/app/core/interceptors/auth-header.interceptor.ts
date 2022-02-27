import { Observable } from 'rxjs'
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable, Provider } from '@angular/core'
import { TokenStorageService } from '@core/auth/services/token-storage.service'

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
    constructor(private tokenStorage: TokenStorageService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const accessToken = this.tokenStorage.getToken()

        if (accessToken) {
            request = this.addToken(request, accessToken)
        }

        return next.handle(request)
    }

    private addToken(request: HttpRequest<any>, accessToken: string) {
        return request.clone({
            headers: request.headers.set('Authorization', 'Bearer ' + accessToken),
        })
    }
}

export const authInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHeaderInterceptor,
    multi: true,
}
