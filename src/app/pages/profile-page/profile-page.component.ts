import { Component, OnInit } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from '@core/auth/services/auth.service'
import { HotToastService } from '@ngneat/hot-toast'

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
    form = this.fb.group({
        password: [''],
        passwordConfirmation: [''],
    })

    errors: string[] = []

    constructor(
        private auth: AuthService,
        private fb: FormBuilder,
        private router: Router,
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
        this.auth.changePassword(password, passwordConfirmation).subscribe({
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
