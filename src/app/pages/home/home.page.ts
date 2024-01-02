import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SpreadIntoArrayPipe } from '@core/pipes/spread-into-array.pipe'
import { AppStateService } from '@core/states/app-state.service'
import { ButtonComponent } from '@core/ui/button/button.component'
import { MaterialModules } from '@core/ui/material'

@Component({
    standalone: true,
    imports: [CommonModule, MaterialModules, RouterModule, ButtonComponent, SpreadIntoArrayPipe],
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export default class HomePage {
    constructor(public appState: AppStateService) {}
}
