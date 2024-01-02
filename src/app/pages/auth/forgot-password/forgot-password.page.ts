import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Router, RouterModule } from '@angular/router'
import { AuthService } from '@main/auth/services/auth.service'

@Component({
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
    templateUrl: './forgot-password.page.html',
    styleUrls: ['./forgot-password.page.scss'],
})
export default class ForgotPasswordPage {
    email = ''

    constructor(private auth: AuthService, private router: Router) {}

    submit() {
        this.auth.forgotPassword(this.email).subscribe({
            next: () => {
                this.router.navigate(['/'])
            },
        })
    }
}
