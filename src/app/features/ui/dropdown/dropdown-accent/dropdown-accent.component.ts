import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface DropdownItem {
    label: string
    matIconString: string
    routerLinkCommands: any[]
}
@Component({
  selector: 'app-dropdown-accent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown-accent.component.html',
  styleUrls: ['./dropdown-accent.component.scss']
})
export class DropdownAccentComponent {
    @Input() matIconString = ''
    @Input() expanded = false
    @Input() buttonLabel = ''
    @Input() dropdownItems: DropdownItem[] = []
}
