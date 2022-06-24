import { Injectable } from '@angular/core'
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms'
import { RegisterPayload } from '../interfaces/register.payload'

@Injectable()
export class RegisterFormService {
    form: UntypedFormGroup

    constructor(private fb: UntypedFormBuilder) {
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
