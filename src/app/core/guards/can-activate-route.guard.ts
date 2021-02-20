import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router'
import { AuthService } from '@core/services/auth.service'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class CanActivateRouteGuard implements CanActivate {
    constructor(private authService: AuthService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.authService.isLoggedIn$()
    }
}
