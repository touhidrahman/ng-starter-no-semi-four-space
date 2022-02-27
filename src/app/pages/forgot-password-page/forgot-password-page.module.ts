import { NgModule } from '@angular/core'
import { CoreModule } from '@core/core.module'
import { LayoutModule } from '@features/layout/layout.module'
import { ForgotPasswordPageRoutingModule } from './forgot-password-page-routing.module'
import { ForgotPasswordPageComponent } from './forgot-password-page.component'

@NgModule({
    declarations: [ForgotPasswordPageComponent],
    imports: [CoreModule, LayoutModule, ForgotPasswordPageRoutingModule],
})
export class ForgotPasswordPageModule {}
