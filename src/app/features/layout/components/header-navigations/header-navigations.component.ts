import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AuthService } from '@core/auth/services/auth.service'

@Component({
    selector: 'app-header-navigations',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './header-navigations.component.html',
    styleUrls: ['./header-navigations.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderNavigationsComponent implements OnInit {
    constructor(public auth: AuthService) {}

    ngOnInit(): void {}
}
