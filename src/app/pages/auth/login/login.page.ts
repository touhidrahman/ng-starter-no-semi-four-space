import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { ActivatedRoute, Router, RouterModule } from '@angular/router'
import { AuthStateService } from '@main/auth/services/auth.service'
import { LoginFormService } from '@main/auth/services/login-form.service'

@Component({
    standalone: true,
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
    imports: [CommonModule, ReactiveFormsModule, RouterModule],
    providers: [LoginFormService],
})
export default class LoginPage implements OnInit {
    loading = false
    errors: string[] = []
    private returnUrl = ''

    constructor(
        public loginFormService: LoginFormService,
        private activatedRoute: ActivatedRoute,
        private authStateService: AuthStateService,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] ?? '/'
        if (this.authStateService.isLoggedIn()) this.router.navigateByUrl(this.returnUrl)
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
