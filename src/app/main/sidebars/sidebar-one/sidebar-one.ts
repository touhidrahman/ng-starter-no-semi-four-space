import { Component, EventEmitter, Input, Output } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
    selector: 'app-sidebar-one',
    templateUrl: './sidebar-one.html',
    styleUrls: ['./sidebar-one.scss'],
    imports: [RouterModule],
})
export class SidebarOneComponent {
    @Input() isOpen = true
    @Output() closeSidebar = new EventEmitter<void>()

    itemClick(_event: any) {
        this.closeSidebar.emit()
    }
}
