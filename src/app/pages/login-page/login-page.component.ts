import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { ActivatedRoute, Router, RouterModule } from '@angular/router'
import { AuthService } from '@core/auth/services/auth.service'
import { LoginFormService } from '@core/auth/services/login-form.service'
import { LayoutHalfImageComponent } from '@features/layout/components/layout-half-image/layout-half-image.component'

@Component({
    standalone: true,
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
    imports: [CommonModule, ReactiveFormsModule, RouterModule, LayoutHalfImageComponent],
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
