import { HttpInterceptorFn, HttpResponse } from '@angular/common/http'
import { inject } from '@angular/core'
import { WINDOW } from '@ng-web-apis/common'
import { catchError, of } from 'rxjs'

export const unauthorizedInterceptorFn: HttpInterceptorFn = (req, next) => {
    if (req.url.match(/auth/)) {
        return next(req)
    }
    return next(req).pipe(
        catchError((err: HttpResponse<Record<string, string>>) => {
            if (err.status === 401) {
                inject(WINDOW).alert('Unauthorized')
            }
            return of(err)
        }),
    )
}
