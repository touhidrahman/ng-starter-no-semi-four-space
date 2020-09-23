import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { AuthService } from '@app/features/auth/services/auth.service'
import { BehaviorSubject, Observable, throwError } from 'rxjs'
import { catchError, filter, finalize, switchMap, take } from 'rxjs/operators'

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    private isRefreshing = false
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null)

    constructor(private authService: AuthService) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        if (!request.headers.has('Content-Type')) {
            request = request.clone({
                headers: request.headers.set('Content-Type', 'application/json'),
            })
        }

        request = this.addToken(request)

        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error && error.status === 401) {
                    return this.handleUnauthorizedError(request, next)
                } else {
                    return throwError(error)
                }
            }),
        )
    }

    private addToken(request: HttpRequest<unknown>) {
        if (!this.authService.currentTokenValue) {
            return request
        }
        // If you are calling an outside domain then do not add the token.
        if (!request.url.match(/www.mydomain.com\//)) {
            return request
        }
        return request.clone({
            headers: request.headers.set('Authorization', `Bearer ${this.authService.currentTokenValue}`),
        })
    }

    private handleUnauthorizedError(request: HttpRequest<unknown>, next: HttpHandler) {
        if (this.isRefreshing) {
            return this.refreshTokenSubject.pipe(
                filter((token) => token !== null),
                take(1),
                switchMap((jwt) => next.handle(this.addToken(request))),
            )
        } else {
            this.isRefreshing = true
            this.refreshTokenSubject.next(null)

            return this.authService.refreshToken$().pipe(
                switchMap(({ accessToken }) => {
                    this.refreshTokenSubject.next(accessToken)
                    return next.handle(this.addToken(request))
                }),
                finalize(() => (this.isRefreshing = false)),
            )
        }
    }
}
