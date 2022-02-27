import { NgModule } from '@angular/core'
import { CoreModule } from '@core/core.module'
import { LayoutModule } from '@features/layout/layout.module'
import { ResetForgottenPasswordPageRoutingModule } from './reset-forgotten-password-page-routing.module'
import { ResetForgottenPasswordPageComponent } from './reset-forgotten-password-page.component'

@NgModule({
    declarations: [ResetForgottenPasswordPageComponent],
    imports: [CoreModule, LayoutModule, ResetForgottenPasswordPageRoutingModule],
})
export class ResetForgottenPasswordPageModule {}
