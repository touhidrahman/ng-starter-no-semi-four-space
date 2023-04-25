import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { RouterModule } from '@angular/router'

export interface DropdownItem {
    label: string
    matIconString: string
    routerLinkCommands: any[]
}

@Component({
  selector: 'app-dropdown-accent',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule],
  templateUrl: './dropdown-accent.component.html',
  styleUrls: ['./dropdown-accent.component.scss']
})
export class DropdownAccentComponent {
    @Input() matIconString = ''
    @Input() expanded = false
    @Input() buttonLabel = ''
    @Input() dropdownItems: DropdownItem[] = []
}
