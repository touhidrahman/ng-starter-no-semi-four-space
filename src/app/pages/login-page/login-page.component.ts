import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from '@core/services/auth.service'
import { SeoService } from '@core/services/seo.service'

@Component({
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
    loginForm: FormGroup
    loading = false
    isError = false
    errorMessages: string[] = []

    constructor(
        private authService: AuthService,
        private fb: FormBuilder,
        private router: Router,
        private seoService: SeoService,
    ) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
        })
    }

    ngOnInit(): void {
        this.seoService.setSeoData('Login', `Login`)
    }

    login(): void {
        if (this.loading) return

        if (this.loginForm.invalid) {
            this.isError = true
            this.errorMessages = ['Invalid credentials.']
            return
        }
        const { email, password } = this.loginForm.value

        this.authService.login(email, password).subscribe(
            (_) => {
                void this.router.navigate(['/home'])
            },
            (err: any) => {
                this.loading = false
                this.isError = true
                this.errorMessages = err.error?.message?.[0]?.messages?.map((m) => m.message)
            },
        )
    }
}
