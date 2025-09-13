import { CommonModule } from '@angular/common'
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    inject,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core'
import { RouterModule } from '@angular/router'
import { AppStateService } from '@core/states/app-state.service'
import { PrimeModules } from '@core/ui/primeng'
import { AuthStateService } from '@main/auth/services/auth.service'
import { MenuItem } from 'primeng/api'
import { Menu } from 'primeng/menu'

@Component({
    selector: 'app-header-one',
    imports: [RouterModule, CommonModule, ...PrimeModules],
    templateUrl: './header-one.component.html',
    styleUrls: ['./header-one.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderOneComponent implements OnInit {
    auth = inject(AuthStateService)
    appState = inject(AppStateService)

    @Input() showToggle = false
    @Output() sidenavToggle = new EventEmitter<void>()

    appName = this.appState.appName

    @ViewChild('menu') menu!: Menu

    // 👇 User dropdown items
    userMenuItems: MenuItem[] = [
        {
            label: 'Profile',
            icon: 'pi pi-user',
            routerLink: '/profile',
        },
        {
            label: 'Settings',
            icon: 'pi pi-cog',
            routerLink: '/settings',
        },
        {
            separator: true,
        },
        {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            command: () => this.logout(),
        },
    ]

    ngOnInit(): void {
        void 0
    }

    toggle(): void {
        this.sidenavToggle.next()
    }

    logout() {
        this.auth.logout() // assuming you have a logout method
    }
}
