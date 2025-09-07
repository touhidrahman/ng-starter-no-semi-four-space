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
            label: 'Users',
            icon: 'pi pi-users',
            routerLink: '/users',
        },
        {
            label: 'Settings',
            icon: 'pi pi-cog',
            routerLink: '/settings',
            items: [
                {
                    label: 'Profile',
                    icon: 'pi pi-user',
                    routerLink: '/settings/profile',
                },
                {
                    label: 'Security',
                    icon: 'pi pi-lock',
                    routerLink: '/settings/security',
                },
            ],
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
