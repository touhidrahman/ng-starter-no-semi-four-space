import { NgModule } from '@angular/core'
import { CoreModule } from '@core/core.module'
import { LayoutModule } from '@features/layout/layout.module'
import { RegisterPageRoutingModule } from './register-page-routing.module'
import { RegisterPageComponent } from './register-page.component'

@NgModule({
    declarations: [RegisterPageComponent],
    imports: [CoreModule, LayoutModule, RegisterPageRoutingModule],
})
export class RegisterPageModule {}
