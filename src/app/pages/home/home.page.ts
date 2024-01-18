import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SpreadIntoArrayPipe } from '@core/pipes/spread-into-array.pipe'
import { AppStateService } from '@core/states/app-state.service'
import { MaterialModules } from '@core/ui/material'
import { SpartanUiImports } from '@core/ui/spartan'
import { HlmAccordionModule } from '@spartan-ng/ui-accordion-helm'
import { HlmAlertImports } from '@spartan-ng/ui-alert-helm'
import { HlmAlertDialogModule } from '@spartan-ng/ui-alertdialog-helm'
import { HlmButtonModule } from '@spartan-ng/ui-button-helm'
import { HlmDialogImports, HlmDialogModule } from '@spartan-ng/ui-dialog-helm'
import { HlmIconModule } from '@spartan-ng/ui-icon-helm'

@Component({
    standalone: true,
    imports: [
        CommonModule,
        MaterialModules,
        RouterModule,
        SpreadIntoArrayPipe,
        ...SpartanUiImports,
        // HlmButtonModule,
        // HlmDialogModule,
        // HlmAlertDialogModule,
        // HlmIconModule,
        // HlmAccordionModule,
    ],
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export default class HomePage {
    constructor(public appState: AppStateService) {}
}
