import { catchError, Observable, of } from 'rxjs'
import {
    HTTP_INTERCEPTORS,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
} from '@angular/common/http'
import { Inject, Injectable, Provider } from '@angular/core'
import { WINDOW } from '@ng-web-apis/common'

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {
    constructor(@Inject(WINDOW) private wnd: Window) {}

    intercept(
        req: HttpRequest<Record<string, string>>,
        next: HttpHandler,
    ): Observable<HttpEvent<Record<string, string>>> {
        if (req.url.match(/auth/)) {
            return next.handle(req)
        }
        return next.handle(req).pipe(
            catchError((err: HttpResponse<Record<string, string>>) => {
                if (err.status === 401) {
                    this.wnd.alert('Unauthorized')
                }
                return of(err)
            }),
        )
    }
}

export const unauthorizedInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: UnauthorizedInterceptor,
    multi: true,
}
