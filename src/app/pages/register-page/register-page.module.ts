import { NgModule } from '@angular/core'
import { CoreModule } from '@core/core.module'
import { RegisterPageRoutingModule } from './register-page-routing.module'
import { RegisterPageComponent } from './register-page.component'

@NgModule({
    declarations: [RegisterPageComponent],
    imports: [CoreModule, RegisterPageRoutingModule],
})
export class RegisterPageModule {}
