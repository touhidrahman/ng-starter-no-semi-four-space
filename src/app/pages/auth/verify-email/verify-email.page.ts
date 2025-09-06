import { Component, inject, OnInit } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { ActivatedRoute, Router, RouterModule } from '@angular/router'
import { AuthApiService } from '@main/auth/services/auth-api.service'
import { timer } from 'rxjs'

@Component({
    imports: [ReactiveFormsModule, RouterModule],
    templateUrl: './verify-email.page.html',
    styleUrls: ['./verify-email.page.scss'],
})
export default class VerifyEmailPage implements OnInit {
    private auth = inject(AuthApiService)
    private activatedRoute = inject(ActivatedRoute)
    private router = inject(Router)

    message = 'Verifying email...'

    ngOnInit(): void {
        const token = this.activatedRoute.snapshot.params['token'] ?? ''
        if (!token) {
            this.message = 'Invalid token'
            this.redirectToLoginPage()
            return
        }

        this.auth.verifyEmail(token).subscribe({
            next: () => {
                this.message = 'Email verified. Redirecting to login page...'
                this.redirectToLoginPage()
            },
            error: () => {
                this.message = 'Invalid token'
                this.redirectToLoginPage()
            },
        })
    }

    private redirectToLoginPage() {
        timer(5000).subscribe({ next: () => this.router.navigate(['/']) })
    }
}
