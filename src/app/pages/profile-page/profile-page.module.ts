import { NgModule } from '@angular/core'
import { CoreModule } from '@core/core.module'
import { LayoutModule } from '@features/layout/layout.module'
import { ProfilePageRoutingModule } from './profile-page-routing.module'
import { ProfilePageComponent } from './profile-page.component'

@NgModule({
    declarations: [ProfilePageComponent],
    imports: [CoreModule, LayoutModule, ProfilePageRoutingModule],
})
export class ProfilePageModule {}
