import { Injectable } from '@angular/core'
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanLoad,
    Route,
    Router,
    RouterStateSnapshot,
    UrlSegment,
} from '@angular/router'
import { UserRole } from '@core/interfaces'
import { AuthService } from '../auth/services/auth.service'

@Injectable({
    providedIn: 'root',
})
export class AdminGuard implements CanActivate, CanLoad {
    constructor(private authService: AuthService, private router: Router) {}

    canLoad(_route: Route, _segments: UrlSegment[]): boolean {
        const user = this.authService.getUser()
        if (user?.role === UserRole.ADMIN) return true
        this.router.navigate(['login'])
        return false
    }

    canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): boolean {
        const user = this.authService.getUser()
        if (user?.role === UserRole.ADMIN) return true
        this.router.navigate(['login'])
        return false
    }
}
