import { Component, inject, OnInit } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { ActivatedRoute, Router, RouterModule } from '@angular/router'
import { AuthStateService } from '@main/auth/services/auth.service'
import { LoginFormService } from '@main/auth/services/login-form.service'

@Component({
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
    imports: [ReactiveFormsModule, RouterModule],
    providers: [LoginFormService],
})
export default class LoginPage implements OnInit {
    loginFormService = inject(LoginFormService)
    private activatedRoute = inject(ActivatedRoute)
    private authStateService = inject(AuthStateService)
    private router = inject(Router)

    loading = false
    errors: string[] = []
    private returnUrl = ''

    ngOnInit(): void {
        this.returnUrl =
            this.activatedRoute.snapshot.queryParams['returnUrl'] ?? '/'
        if (this.authStateService.isLoggedIn())
            this.router.navigateByUrl(this.returnUrl)
    }

    submit(): void {
        if (this.loading) return

        if (this.loginFormService.loginForm.invalid) {
            this.errors.push('Invalid Credentials')
        }

        this.errors = []
        this.loading = true

        const { email, password } = this.loginFormService.getValue()
        this.authStateService.login(email, password).subscribe({
            next: (_) => {
                this.loading = false
                this.router.navigateByUrl(this.returnUrl)
            },
            error: () => {
                this.loading = false
                this.errors.push('Invalid Credentials')
            },
        })
    }
}
