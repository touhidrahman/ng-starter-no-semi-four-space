import { Component, Input } from '@angular/core'
import { PrimeModules } from '@core/ui/primeng'

@Component({
    selector: 'app-sidebar-one',
    templateUrl: './sidebar-one.html',
    styleUrls: ['./sidebar-one.scss'],
    imports: [...PrimeModules],
})
export class SidebarOneComponent {
    @Input() isOpen = true
}
