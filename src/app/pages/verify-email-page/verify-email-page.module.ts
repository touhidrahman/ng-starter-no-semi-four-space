import { NgModule } from '@angular/core'
import { CoreModule } from '@core/core.module'
import { VerifyEmailPageRoutingModule } from './verify-email-page-routing.module'
import { VerifyEmailPageComponent } from './verify-email-page.component'

@NgModule({
    declarations: [VerifyEmailPageComponent],
    imports: [CoreModule, VerifyEmailPageRoutingModule],
})
export class VerifyEmailPageModule {}
