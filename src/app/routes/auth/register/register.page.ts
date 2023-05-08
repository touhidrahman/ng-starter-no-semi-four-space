import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { Router, RouterModule } from '@angular/router'
import { AuthService } from '@core/auth/services/auth.service'
import { RegisterFormService } from '@core/auth/services/register-form.service'

@Component({
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterModule],
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
    providers: [RegisterFormService],
})
export default class RegisterPage implements OnInit {
    loading = false
    errors: string[] = []

    constructor(public registerFormService: RegisterFormService, private router: Router, private auth: AuthService) {}

    ngOnInit(): void {
        void 0
    }

    register(): void {
        if (this.loading) return
        this.errors = []

        this.loading = true
        this.auth.signUp(this.registerFormService.getValue()).subscribe({
            next: () => {
                this.loading = false
                this.router.navigate(['/'])
            },
            error: ({ error }) => {
                if (typeof error.message === 'string') {
                    this.errors.push(error.message)
                }
                if (Array.isArray(error.message)) {
                    error.message.forEach((x: string) => this.errors.push(x))
                }

                this.loading = false
            },
            complete: () => {
                this.loading = false
            },
        })
    }
}
