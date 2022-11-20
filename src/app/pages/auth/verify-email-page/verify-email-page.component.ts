import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { ActivatedRoute, Router, RouterModule } from '@angular/router'
import { AuthService } from '@core/auth/services/auth.service'
import { timer } from 'rxjs'

@Component({
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterModule],
    templateUrl: './verify-email-page.component.html',
    styleUrls: ['./verify-email-page.component.scss'],
})
export default class VerifyEmailPageComponent implements OnInit {
    message = 'Verifying email...'

    constructor(private auth: AuthService, private activatedRoute: ActivatedRoute, private router: Router) {}

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
