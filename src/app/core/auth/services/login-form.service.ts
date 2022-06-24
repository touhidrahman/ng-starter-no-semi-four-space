import { Injectable } from '@angular/core'
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms'
import { LoginPayload } from '../interfaces/login.payload'

@Injectable()
export class LoginFormService {
    loginForm: UntypedFormGroup

    constructor(private fb: UntypedFormBuilder) {
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
