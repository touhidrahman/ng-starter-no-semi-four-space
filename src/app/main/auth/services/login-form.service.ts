import { Injectable } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { LoginInput } from '../models/login-input'

@Injectable()
export class LoginFormService {
    loginForm: FormGroup

    constructor(private fb: FormBuilder) {
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
