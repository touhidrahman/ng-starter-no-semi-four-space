import { inject } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '../services/auth.service'

/**
 * Checks whether user is admin or not
 * @returns
 */
export const adminGuardFn = () => {
    const router = inject(Router)
    const authService = inject(AuthService)
    if (authService.isAdmin) return true
    router.navigate(['login'])
    return false
}
