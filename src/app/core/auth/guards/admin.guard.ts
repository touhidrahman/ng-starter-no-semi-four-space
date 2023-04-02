import { inject } from '@angular/core'
import { Router } from '@angular/router'
import { UserRole } from '@core/models'
import { AuthService } from '../services/auth.service'

export const adminGuardFn = () => {
    const router = inject(Router)
    const authService = inject(AuthService)
    const user = authService.user.value
    if (user?.role === UserRole.ADMIN) return true
    router.navigate(['login'])
    return false
}
