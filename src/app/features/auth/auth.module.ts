import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'
import { ResetPasswordComponent } from './components/reset-password/reset-password.component'
import { VerifyComponent } from './components/verify/verify.component'

@NgModule({
    declarations: [LoginComponent, RegisterComponent, VerifyComponent, ForgotPasswordComponent, ResetPasswordComponent],
    imports: [CommonModule, ReactiveFormsModule],
})
export class AuthModule {}
