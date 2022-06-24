import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Router, RouterModule } from '@angular/router'
import { AuthService } from '@core/auth/services/auth.service'
import { LayoutHalfImageComponent } from '@features/layout/components/layout-half-image/layout-half-image.component'
import { HotToastService } from '@ngneat/hot-toast'

@Component({
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule, LayoutHalfImageComponent],
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
