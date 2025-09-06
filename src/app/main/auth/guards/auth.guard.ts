import { inject } from '@angular/core'
import {
    ActivatedRouteSnapshot,
    CanActivateFn,
    Router,
    RouterStateSnapshot,
} from '@angular/router'
import { AuthStateService } from '../services/auth.service'

export function authGuardFn({
    redirectTo,
}: {
    redirectTo: unknown[]
}): CanActivateFn {
    return (_route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        return inject(AuthStateService).isLoggedIn()
            ? true
            : inject(Router).createUrlTree(redirectTo, {
                  queryParams: { returnUrl: state.url },
              })
    }
}
