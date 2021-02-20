import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SettingsModule } from '@features/settings/settings.module'
import { SettingsPageRoutingModule } from './settings-page-routing.module'
import { SettingsPageComponent } from './settings-page.component'

@NgModule({
    declarations: [SettingsPageComponent],
    imports: [CommonModule, SettingsModule, SettingsPageRoutingModule],
})
export class SettingsPageModule {}
