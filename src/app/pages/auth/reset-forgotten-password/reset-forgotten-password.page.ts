import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators
} from '@angular/forms'
import { ActivatedRoute, Router, RouterModule } from '@angular/router'
import { JwtService } from '@core/services/jwt.service'
import { ToastService } from '@core/ui/toast/toast.service'
import { ForgotPasswordVerificationToken } from '@main/auth/models/forgot-password-verification-token.model'
import { AuthApiService } from '@main/auth/services/auth-api.service'
import { getAuthRoutes } from '../auth.routes'

@Component({
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterModule],
    templateUrl: './reset-forgotten-password.page.html',
    styleUrls: ['./reset-forgotten-password.page.scss'],
})
export default class ResetForgottenPasswordPage implements OnInit {
    userInfo: ForgotPasswordVerificationToken | null = null
    form: FormGroup = new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        passwordConfirmation: new FormControl('', [Validators.required, Validators.minLength(8)]),
    })

    constructor(
        private router: Router,
        private activeRoute: ActivatedRoute,
        private alertService: ToastService,
        private jwtService: JwtService,
        private authApiService: AuthApiService,
    ) {}

    ngOnInit(): void {
        this.userInfo = this.jwtService.decodeToken(this.activeRoute.snapshot.params['token'])
    }

    resetPasswordSubmitted() {
        if (!this.userInfo) return

        const { password, passwordConfirmation } = this.form.value

        if (!this.form.valid || password !== passwordConfirmation) {
            this.alertService.error('Passwords do not match')
            return
        }

        this.authApiService
            .resetPassword(this.activeRoute.snapshot.params['token'], this.userInfo.email, password)
            .subscribe((res) => {
                this.alertService.success('Password reset successfully...')
                setTimeout(() => {
                    this.router.navigateByUrl(`/${getAuthRoutes().login.path}`)
                }, 3000)
            })
    }
}
