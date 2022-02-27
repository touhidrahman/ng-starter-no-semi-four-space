import { Component, OnInit } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { AuthService } from '@core/services/auth.service'
import { HotToastService } from '@ngneat/hot-toast'

@Component({
    selector: 'app-reset-forgotten-password-page',
    templateUrl: './reset-forgotten-password-page.component.html',
    styleUrls: ['./reset-forgotten-password-page.component.scss'],
})
export class ResetForgottenPasswordPageComponent implements OnInit {
    form = this.fb.group({
        password: [''],
        passwordConfirmation: [''],
    })

    errors: string[] = []
    token = this.ar.snapshot.params.token ?? ''

    constructor(
        private auth: AuthService,
        private fb: FormBuilder,
        private router: Router,
        private ar: ActivatedRoute,
        private toast: HotToastService,
    ) {}

    ngOnInit(): void {
        void 0
    }

    submit(): void {
        this.errors = []
        const { password, passwordConfirmation } = this.form.value
        if (password !== passwordConfirmation) {
            this.errors.push('Passwords do not match')
            return
        }
        this.auth.resetForgottenPassword(this.token, password, passwordConfirmation).subscribe({
            next: () => {
                this.toast.success('Password reset successfully')
                this.router.navigate(['/login'])
            },
            error: (err) => {
                this.errors.push(err.error.message)
            },
        })
    }
}
