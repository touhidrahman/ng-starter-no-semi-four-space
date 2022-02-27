import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '@core/services/auth.service'
import { HotToastService } from '@ngneat/hot-toast'

@Component({
    templateUrl: './forgot-password-page.component.html',
    styleUrls: ['./forgot-password-page.component.scss'],
})
export class ForgotPasswordPageComponent {
    email = ''

    constructor(private auth: AuthService, private toast: HotToastService, private router: Router) {}

    submit() {
        this.auth.forgotPassword(this.email).subscribe({
            next: () => {
                this.toast.success('Success! Please check your email.')
                this.router.navigate(['/'])
            },
        })
    }
}
