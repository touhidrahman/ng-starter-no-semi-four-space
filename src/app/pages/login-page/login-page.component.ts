import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { AuthService } from '@core/services/auth.service'
import { LoginFormService } from '@core/services/login-form.service'

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
    providers: [LoginFormService],
})
export class LoginPageComponent implements OnInit {
    loading = false
    errors: string[] = []
    private returnUrl = ''

    constructor(
        public loginFormService: LoginFormService,
        private activatedRoute: ActivatedRoute,
        private auth: AuthService,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] ?? '/'
        if (this.auth.isLoggedIn) this.router.navigateByUrl(this.returnUrl)
    }

    submit(): void {
        if (this.loading) return

        if (this.loginFormService.loginForm.invalid) {
            this.errors.push('Invalid Credentials')
        }

        this.errors = []
        this.loading = true

        this.auth.login(this.loginFormService.getValue()).subscribe({
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
