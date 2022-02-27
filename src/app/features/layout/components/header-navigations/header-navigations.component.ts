import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { AuthService } from '@core/auth/services/auth.service'

@Component({
    selector: 'app-header-navigations',
    templateUrl: './header-navigations.component.html',
    styleUrls: ['./header-navigations.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderNavigationsComponent implements OnInit {
    constructor(public auth: AuthService) {}

    ngOnInit(): void {}
}
