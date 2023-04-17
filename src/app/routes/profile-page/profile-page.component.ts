import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'
import { Router, RouterModule } from '@angular/router'
import { AuthService } from '@core/auth/services/auth.service'
import { FooterOneComponent } from '@features/footers/footer-one/footer-one.component'
import { HeaderOneComponent } from '@features/headers/header-one/header-one.component'
import { ToastService } from '@features/ui/toast/toast.service'

@Component({
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterModule, FooterOneComponent, HeaderOneComponent],
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.scss'],
})
export default class ProfilePageComponent implements OnInit {
    form = this.fb.nonNullable.group({
        password: [''],
        passwordConfirmation: [''],
    })

    errors: string[] = []

    constructor(
        private auth: AuthService,
        private fb: FormBuilder,
        private router: Router,
        private toast: ToastService,
    ) {}

    ngOnInit(): void {
        void 0
    }

    submit(): void {
        this.errors = []
        const { password, passwordConfirmation } = this.form.value
        if (!password || password !== passwordConfirmation) {
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
