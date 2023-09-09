import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { RouterModule } from '@angular/router'
import { expandCollapseTrigger } from 'src/app/main/ui/animations/expand-collapse.animation'

export interface DropdownItem {
    label: string
    matIconString: string
    // rome-ignore lint/suspicious/noExplicitAny: <explanation>
    routerLinkCommands: any[]
}

@Component({
    selector: 'app-dropdown-accent',
    standalone: true,
    imports: [CommonModule, MatIconModule, RouterModule],
    templateUrl: './dropdown-accent.component.html',
    styleUrls: ['./dropdown-accent.component.scss'],
    animations: [expandCollapseTrigger],
})
export class DropdownAccentComponent {
    @Input() matIconString = ''
    @Input() expanded = false
    @Input() buttonLabel = ''
    @Input() dropdownItems: DropdownItem[] = []
}
