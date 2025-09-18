import { Component } from '@angular/core'
import { PrimeModules } from '@core/ui/primeng'

@Component({
    selector: 'app-settings',
    templateUrl: './settings.html',
    imports: [...PrimeModules],
})
export class SettingsComponent {}
