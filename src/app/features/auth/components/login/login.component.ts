import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { AuthService } from '../../services/auth.service'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup
    loading = false

    constructor(
        private authService: AuthService,
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
    ) {
        this.defineForm()
    }

    ngOnInit(): void {}

    login() {
        this.loading = true
        const value = this.loginForm.value
        this.authService.login(value).subscribe((v) => {
            console.log('TCL: LoginComponent -> login -> v', v)
            this.loading = false
            this.router.navigate(['/'])
        })
    }

    private defineForm() {
        this.loginForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        })
    }
}
