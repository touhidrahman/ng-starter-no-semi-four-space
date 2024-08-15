import { Injectable, inject } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { LoginInput } from '../models/login-input'

@Injectable()
export class LoginFormService {
    private fb = inject(FormBuilder)

    loginForm: FormGroup

    constructor() {
        this.loginForm = this.fb.nonNullable.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
        })
    }

    getValue(): LoginInput {
        const { email, password } = this.loginForm.value
        return { email, password }
    }
}
