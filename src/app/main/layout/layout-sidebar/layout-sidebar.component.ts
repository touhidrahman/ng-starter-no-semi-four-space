import {
    ChangeDetectionStrategy,
    Component,
    inject,
    signal,
} from '@angular/core'
import { RouterModule } from '@angular/router'
import { AppStateService } from '@core/states/app-state.service'
import { PrimeModules } from '@core/ui/primeng'
import { isSmallScreen } from '@core/utils/screen.util'
import { AuthStateService } from '@main/auth/services/auth.service'
import { HeaderOneComponent } from '@main/headers/header-one/header-one.component'
import { SidebarOneComponent } from '@main/sidebars/sidebar-one/sidebar-one'

@Component({
    selector: 'app-layout-sidebar',
    imports: [
        RouterModule,
        HeaderOneComponent,
        SidebarOneComponent,
        ...PrimeModules,
    ],
    templateUrl: './layout-sidebar.component.html',
    styleUrls: ['./layout-sidebar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutSidebarComponent {
    auth = inject(AuthStateService)
    private appState = inject(AppStateService)

    sidebarVisible = signal(false)

    menuToggles = {
        home: false,
        account: false,
    }

    appName = this.appState.appName
    isSmallScreen = false

    constructor() {
        this.isSmallScreen = isSmallScreen()
        if (this.isSmallScreen) {
            this.sidebarVisible.set(false)
        }
    }

    toggleSidebar() {
        this.sidebarVisible.set(!this.sidebarVisible())
    }
}
