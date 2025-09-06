import { Component, inject, OnInit } from '@angular/core'
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'
import { Router, RouterModule } from '@angular/router'
import { ToastService } from '@core/ui/toast/toast.service'
import { AuthApiService } from '@main/auth/services/auth-api.service'

@Component({
    imports: [ReactiveFormsModule, RouterModule],
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export default class ProfilePage implements OnInit {
    private auth = inject(AuthApiService)
    private fb = inject(FormBuilder)
    private router = inject(Router)
    private toast = inject(ToastService)

    form = this.fb.nonNullable.group({
        currentPassword: [''],
        password: [''],
        passwordConfirmation: [''],
    })

    errors: string[] = []

    ngOnInit(): void {
        void 0
    }

    submit(): void {
        this.errors = []
        const { currentPassword, password, passwordConfirmation } =
            this.form.value

        if (!currentPassword || !password || !passwordConfirmation) {
            this.errors.push('All fields are required')
            return
        }
        if (!password || password !== passwordConfirmation) {
            this.errors.push('Passwords do not match')
            return
        }
        this.auth
            .changePassword(currentPassword, password, passwordConfirmation)
            .subscribe({
                next: () => {
                    this.toast.success('Password changed successfully')
                    this.form.reset()
                },
                error: (err) => {
                    this.errors.push(err.error.message)
                },
            })
    }
}
