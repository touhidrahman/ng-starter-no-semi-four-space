import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http'
import { inject } from '@angular/core'
import { Router } from '@angular/router'
import { catchError, throwError } from 'rxjs'

export const serverErrorInterceptorFn: HttpInterceptorFn = (request, next) => {
    // if api endpoint URL includes `auth` in the URL string, let it pass
    if (request.url.match(/auth/)) {
        return next(request)
    }

    return next(request).pipe(
        catchError((error: HttpErrorResponse) => {
            // in case of aunathorized error, redirect to login page
            if ([401, 403].includes(error.status)) {
                inject(Router).navigateByUrl('/login')
                return throwError(() => error)
            }
            // otherwise throw error
            console.error(error)
            return throwError(() => error)
        }),
    )
}
