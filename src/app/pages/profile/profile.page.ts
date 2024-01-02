import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'
import { Router, RouterModule } from '@angular/router'
import { AuthService } from '@main/auth/services/auth.service'
import { FooterOneComponent } from '@main/footers/footer-one/footer-one.component'
import { HeaderOneComponent } from '@main/headers/header-one/header-one.component'

@Component({
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        FooterOneComponent,
        HeaderOneComponent,
    ],
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export default class ProfilePage implements OnInit {
    form = this.fb.nonNullable.group({
        password: [''],
        passwordConfirmation: [''],
    })

    errors: string[] = []

    constructor(private auth: AuthService, private fb: FormBuilder, private router: Router) {}

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
                this.form.reset()
            },
            error: (err) => {
                this.errors.push(err.error.message)
            },
        })
    }
}
