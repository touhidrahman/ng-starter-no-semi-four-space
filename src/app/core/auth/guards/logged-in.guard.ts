import { Observable } from 'rxjs'
import { inject, Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router'
import { AuthService } from '../services/auth.service'

// TODO: replace class with function
@Injectable({
    providedIn: 'root',
})
export class LoggedInGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(
        _route: ActivatedRouteSnapshot,
        _state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.authService.isLoggedIn) return true

        this.router.navigate(['login'])
        return false
    }
}

export function authGuard({ redirectTo }: { redirectTo: any[] }): CanActivateFn {
    return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        return inject(AuthService).isLoggedIn
            ? true
            : inject(Router).createUrlTree(redirectTo, { queryParams: { returnUrl: state.url } })
    }
}
