import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '@core/services/auth.service'
import { User } from '@features/users/interfaces/user'
import { UserService } from '@features/users/services/user.service'

@Component({
    selector: 'app-settings-edit',
    templateUrl: './settings-edit.component.html',
    styleUrls: ['./settings-edit.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsEditComponent {
    @Input() user?: User

    form: FormGroup

    constructor(private fb: FormBuilder, private userService: UserService, private authService: AuthService) {
        this.form = this.fb.group({
            currentPassword: ['', Validators.required],
            newPassword: ['', Validators.required],
            confirmNewPassword: ['', Validators.required],
        })
    }

    submit(): void {
        if (this.form.invalid) {
            alert('Invalid inputs. Please check your entered information')
        }

        const { currentPassword, newPassword, confirmNewPassword } = this.form.value

        if (newPassword !== confirmNewPassword) {
            alert('Passwords do not match. Please try again')
        }

        this.authService.changePassword(currentPassword, newPassword, confirmNewPassword).subscribe(
            () => {
                alert('Password changed successfully')
                this.form.reset()
            },
            (err) => alert('Password reset failed'),
        )
    }
}
