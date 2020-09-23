import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { AuthService } from '@nx-starter/client/data-access'
import { take } from 'rxjs/operators'

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
    resetForm: FormGroup
    loading = false
    token = ''

    constructor(
        private authService: AuthService,
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
    ) {
        this.defineForm()
    }

    ngOnInit(): void {
        this.route.paramMap.pipe(take(1)).subscribe((params) => {
            this.token = params.get('token')
        })
    }

    resetPassword() {
        this.loading = true
        const value: { password: string; passwordConfirm: string } = this.resetForm.value
        this.authService.resetPassword(this.token, value).subscribe((v) => {
            this.loading = false
            this.router.navigate(['/auth/login'])
        })
    }

    private defineForm() {
        this.resetForm = this.fb.group({
            password: ['', Validators.required],
            passwordConfirm: ['', Validators.required],
        })
    }
}
