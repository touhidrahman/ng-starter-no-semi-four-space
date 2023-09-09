import { inject } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router'
import { AuthService } from '../services/auth.service'

export function authGuardFn({ redirectTo }: { redirectTo: any[] }): CanActivateFn {
    return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        return inject(AuthService).isLoggedIn
            ? true
            : inject(Router).createUrlTree(redirectTo, { queryParams: { returnUrl: state.url } })
    }
}
