import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CoreModule } from '@core/core.module'
import { AppButtonsModule } from '@shared/app-buttons/app-buttons.module'
import { AppFormModule } from '@shared/app-form/app-form.module'
import { AppToastModule } from '@shared/app-toast/app-toast.module'
import { SettingsEditComponent } from './components/settings-edit/settings-edit.component'

@NgModule({
    declarations: [SettingsEditComponent],
    imports: [CommonModule, CoreModule, AppToastModule, AppButtonsModule, AppFormModule],
    exports: [SettingsEditComponent],
})
export class SettingsModule {}
