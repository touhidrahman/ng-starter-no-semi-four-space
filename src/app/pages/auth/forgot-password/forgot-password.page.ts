import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Router, RouterModule } from '@angular/router'
import { ToastService } from '@core/ui/toast/toast.service'
import { AuthApiService } from '@main/auth/services/auth-api.service'

@Component({
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
    templateUrl: './forgot-password.page.html',
    styleUrls: ['./forgot-password.page.scss'],
})
export default class ForgotPasswordPage {
    email = ''

    constructor(
        private authApiService: AuthApiService,
        private toast: ToastService,
        private router: Router,
    ) {}

    submit() {
        this.authApiService.forgotPassword(this.email).subscribe({
            next: () => {
                this.toast.success('Success! Please check your email.')
                this.router.navigate(['/'])
            },
        })
    }
}
