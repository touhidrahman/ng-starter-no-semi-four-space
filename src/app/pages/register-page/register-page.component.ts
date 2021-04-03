/* eslint-disable @typescript-eslint/unbound-method */
import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { StrapiErrorResponse } from '@core/interfaces/strapi-error-response'
import { AuthService } from '@core/services/auth.service'
import { SeoService } from '@core/services/seo.service'

@Component({
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
    registerForm: FormGroup
    loading = false
    isError = false
    errorMessages: string[] = []

    constructor(
        private authService: AuthService,
        private router: Router,
        private fb: FormBuilder,
        private seoService: SeoService,
    ) {
        this.registerForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            name: ['', Validators.required],
            password: ['', Validators.required],
            passwordConfirm: ['', Validators.required],
        })
    }

    ngOnInit(): void {
        this.seoService.setSeoData('Register', `Register`)
    }

    register(): void {
        if (this.loading) return

        const { email, name, password, passwordConfirm } = this.registerForm.value
        if (password !== passwordConfirm || this.registerForm.invalid) {
            this.isError = true
            this.errorMessages = ['Passwords do not match.']
            return
        }

        this.loading = true
        this.authService.register(name, email, password).subscribe(
            () => {
                this.loading = false
                void this.router.navigate(['/'])
            },
            (err: StrapiErrorResponse) => {
                this.loading = false
                this.isError = true
                this.errorMessages = err.error?.message?.[0]?.messages?.map((m) => m.message)
            },
        )
    }
}
