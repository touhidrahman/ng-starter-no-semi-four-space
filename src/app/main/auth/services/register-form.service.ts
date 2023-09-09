import { Injectable } from '@angular/core'
import {
    AbstractControl,
    FormControl,
    FormGroup,
    NonNullableFormBuilder,
    ValidationErrors,
    ValidatorFn,
    Validators,
} from '@angular/forms'
import { RegisterPayload } from '../interfaces/register.payload'

type RegisterForm = {
    [field in keyof RegisterPayload]: FormControl<RegisterPayload[field]>
}

@Injectable()
export class RegisterFormService {
    form: FormGroup<RegisterForm>

    constructor(private fb: NonNullableFormBuilder) {
        const { required, minLength, maxLength, pattern, email } = Validators

        this.form = this.fb.group(
            {
                email: ['', [required, email]],
                password: [
                    '',
                    required,
                    minLength(8),
                    maxLength(32),
                    pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/),
                ],
                passwordConfirmation: ['', required],
                firstName: ['', required],
                lastName: ['', required],
            },
            { validators: [confirmPasswordValidator] },
        )
    }

    getValue(): RegisterPayload {
        return this.form.value as RegisterPayload
    }
}

const confirmPasswordValidator: ValidatorFn = (
    control: AbstractControl,
): ValidationErrors | null => {
    return control.value.password === control.value.passwordConfirmation
        ? null
        : { passwordNotMatched: true }
}
