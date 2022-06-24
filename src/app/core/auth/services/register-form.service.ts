import { Injectable } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { RegisterPayload } from '../interfaces/register.payload'

@Injectable()
export class RegisterFormService {
    form: FormGroup

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
        })
    }

    getValue(): RegisterPayload {
        const { email, password, firstName, lastName } = this.form.value
        return { email, password, passwordConfirmation: password, firstName, lastName }
    }
}
