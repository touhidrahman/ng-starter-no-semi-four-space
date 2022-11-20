import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AuthService } from '@core/auth/services/auth.service'
import { APP_NAME } from '@core/config/app-title'
import { isSmallScreen } from '@core/utils/screen.util'
import { FooterOneComponent } from '@features/footers/footer-one/footer-one.component'
import { HeaderOneComponent } from '@features/headers/header-one/header-one.component'
import { MaterialModules } from '@features/ui/material'

@Component({
    selector: 'app-layout-sidebar',
    standalone: true,
    imports: [CommonModule, RouterModule, MaterialModules, HeaderOneComponent, FooterOneComponent],
    templateUrl: './layout-sidebar.component.html',
    styleUrls: ['./layout-sidebar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutSidebarComponent {
    @Input() opened = false

    appName = APP_NAME
    isSmallScreen = false

    constructor(public auth: AuthService) {
        this.isSmallScreen = isSmallScreen()
        if (this.isSmallScreen) {
            this.opened = false
        }
    }

}
