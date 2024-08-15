import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AppStateService } from '@core/states/app-state.service'
import { isSmallScreen } from '@core/utils/screen.util'
import { AuthStateService } from '@main/auth/services/auth.service'
import { HeaderOneComponent } from '@main/headers/header-one/header-one.component'

@Component({
    selector: 'app-layout-sidebar',
    standalone: true,
    imports: [RouterModule, HeaderOneComponent],
    templateUrl: './layout-sidebar.component.html',
    styleUrls: ['./layout-sidebar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutSidebarComponent {
    auth = inject(AuthStateService)
    private appState = inject(AppStateService)

    @Input() opened = true

    menuToggles = {
        home: false,
        account: false,
    }

    appName = this.appState.appName
    isSmallScreen = false

    constructor() {
        this.isSmallScreen = isSmallScreen()
        if (this.isSmallScreen) {
            this.opened = false
        }
    }
}
