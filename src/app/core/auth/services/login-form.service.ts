import { Injectable } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { LoginPayload } from '../interfaces/login.payload'

@Injectable()
export class LoginFormService {
    loginForm: FormGroup

    constructor(private fb: FormBuilder) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
        })
    }

    getValue(): LoginPayload {
        const { email, password } = this.loginForm.value
        return { email, password }
    }
}
