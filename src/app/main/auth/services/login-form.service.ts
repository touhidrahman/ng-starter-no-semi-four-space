import { Injectable, inject } from '@angular/core'
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms'
import { zip } from 'rxjs'
import { LoginInput } from '../models/login-input'

@Injectable()
export class LoginFormService {
    private fb = inject(NonNullableFormBuilder)
    form = this.buildForm()

    buildForm(): FormGroup {
        const { required } = Validators
        const form = this.fb.group({
            identifier: ['', [required]],
            password: ['', [required]],
            zip,
        })
        return form
    }

    get emailControl() {
        return this.form.get('email')
    }

    get passwordControl() {
        return this.form.get('password')
    }

    getValue(): LoginInput {
        const { email, password } = this.form.value
        return { email, password }
    }
}
