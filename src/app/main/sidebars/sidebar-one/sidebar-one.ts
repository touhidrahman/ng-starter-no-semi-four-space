import { Component, EventEmitter, Input, Output } from '@angular/core'
import { RouterModule } from '@angular/router'
import { PrimeModules } from '@core/ui/primeng'
import { MenuItem } from 'primeng/api'

@Component({
    selector: 'app-sidebar-one',
    templateUrl: './sidebar-one.html',
    styleUrls: ['./sidebar-one.scss'],
    imports: [...PrimeModules, RouterModule],
})
export class SidebarOneComponent {
    @Input() isOpen = true
    @Output() closeSidebar = new EventEmitter<void>()

    items: MenuItem[] = [
        {
            label: 'Dashboard',
            icon: 'pi pi-home',
            routerLink: '/dashboard',
        },
        {
            label: 'Accounts',
            icon: 'pi pi-building-columns',
            routerLink: '/accounts',
        },
        {
            label: 'Transactions',
            icon: 'pi pi-sync',
            routerLink: '/transactions',
        },
        {
            label: 'Reports',
            icon: 'pi pi-chart-line',
            routerLink: '/reports',
        },
        {
            label: 'Help',
            icon: 'pi pi-question',
            routerLink: '/help',
        },
    ]

    itemClick(_event: any) {
        this.closeSidebar.emit()
    }
}
