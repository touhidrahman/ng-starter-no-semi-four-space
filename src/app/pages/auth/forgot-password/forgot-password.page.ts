import { Component, inject } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Router, RouterModule } from '@angular/router'
import { ToastService } from '@core/ui/toast/toast.service'
import { AuthApiService } from '@main/auth/services/auth-api.service'

@Component({
    imports: [ReactiveFormsModule, FormsModule, RouterModule],
    templateUrl: './forgot-password.page.html',
    styleUrls: ['./forgot-password.page.scss'],
})
export default class ForgotPasswordPage {
    private authApiService = inject(AuthApiService)
    private toast = inject(ToastService)
    private router = inject(Router)

    email = ''

    submit() {
        this.authApiService.forgotPassword(this.email).subscribe({
            next: () => {
                this.toast.success('Success! Please check your email.')
                this.router.navigate(['/'])
            },
        })
    }
}
