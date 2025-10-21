import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    inject,
    OnInit,
    Output,
} from '@angular/core'
import { RouterModule } from '@angular/router'
import { AppStateService } from '@core/states/app-state.service'
import { IconImports } from '@core/ui/icon-imports'
import { SpartanImports } from '@core/ui/spartan-imports'
import { AuthStateService } from '@main/auth/services/auth.service'
import { provideIcons } from '@ng-icons/core'
import { hlmH3 } from '@spartan-ng/helm/typography'

@Component({
    selector: 'app-header-one',
    imports: [RouterModule, ...SpartanImports],
    providers: [provideIcons(IconImports)],
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
    hlmH3 = hlmH3

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
