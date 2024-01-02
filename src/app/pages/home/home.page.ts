import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SpreadIntoArrayPipe } from '@core/pipes/spread-into-array.pipe'
import { AppStateService } from '@core/states/app-state.service'
import { MaterialModules } from '@core/ui/material'
import { BrnAccordionContentComponent } from '@spartan-ng/ui-accordion-brain'
import {
    HlmAccordionDirective,
    HlmAccordionItemDirective,
    HlmAccordionTriggerDirective,
    HlmAccordionContentDirective,
    HlmAccordionIconDirective,
} from '@spartan-ng/ui-accordion-helm'
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm'

@Component({
    standalone: true,
    imports: [
        CommonModule,
        MaterialModules,
        RouterModule,
        SpreadIntoArrayPipe,
        BrnAccordionContentComponent,
        HlmAccordionDirective,
        HlmAccordionItemDirective,
        HlmAccordionTriggerDirective,
        HlmAccordionContentDirective,
        HlmAccordionIconDirective,
        HlmIconComponent,
    ],
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export default class HomePage {
    constructor(public appState: AppStateService) {}
}
