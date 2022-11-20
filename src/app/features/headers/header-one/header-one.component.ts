import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AuthService } from '@core/auth/services/auth.service'
import { APP_NAME } from '@core/config/app-title'
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
    appName = APP_NAME

    constructor(public auth: AuthService) {}

    ngOnInit(): void {
        void 0
    }
}
