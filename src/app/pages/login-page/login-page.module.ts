import { NgModule } from '@angular/core'
import { CoreModule } from '@core/core.module'
import { LayoutModule } from '@features/layout/layout.module'
import { LoginPageRoutingModule } from './login-page-routing.module'
import { LoginPageComponent } from './login-page.component'

@NgModule({
    declarations: [LoginPageComponent],
    imports: [CoreModule, LayoutModule, LoginPageRoutingModule],
})
export class LoginPageModule {}
