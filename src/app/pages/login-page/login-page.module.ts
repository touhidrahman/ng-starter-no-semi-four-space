import { NgModule } from '@angular/core'

import { LoginPageRoutingModule } from './login-page-routing.module'
import { LoginPageComponent } from './login-page.component'
import { CoreModule } from '@core/core.module'

@NgModule({
    declarations: [LoginPageComponent],
    imports: [CoreModule, LoginPageRoutingModule],
})
export class LoginPageModule {}
