import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AuthService } from '@core/auth/services/auth.service'
import { AppStateService } from '@core/states/app-state.service'
import { ButtonComponent } from '@features/ui/button/button.component'
import { NavbarComponent } from '@features/ui/navbar/navbar.component'

@Component({
    selector: 'app-header-one',
    standalone: true,
    imports: [CommonModule, RouterModule, ButtonComponent, NavbarComponent],
    templateUrl: './header-one.component.html',
    styleUrls: ['./header-one.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderOneComponent implements OnInit {
    appName = this.appState.appName

    constructor(public auth: AuthService, public appState: AppStateService) {}

    ngOnInit(): void {
        void 0
    }
}
