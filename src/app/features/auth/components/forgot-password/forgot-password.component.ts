import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
    email: FormControl
    message = ''
    isSubmitted$: Observable<boolean>

    constructor(private authService: AuthService, private activeRoute: ActivatedRoute) {
        this.email = new FormControl('')
    }

    ngOnInit(): void {}

    submit() {
        const value = this.email.value
        this.isSubmitted$ = this.authService.forgotPassword(value)

        this.isSubmitted$.subscribe((isSubmitted) => {
            this.message = isSubmitted
                ? 'There was an error'
                : 'You will recieve a code if your email exists in our database'
        })
    }
}
