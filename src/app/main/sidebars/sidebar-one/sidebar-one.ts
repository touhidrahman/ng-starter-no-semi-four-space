import { Component, Input } from '@angular/core'
import { PrimeModules } from '@core/ui/primeng'
import { MenuItem } from 'primeng/api'

@Component({
    selector: 'app-sidebar-one',
    templateUrl: './sidebar-one.html',
    styleUrls: ['./sidebar-one.scss'],
    imports: [...PrimeModules],
})
export class SidebarOneComponent {
    @Input() isOpen = true

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
}
