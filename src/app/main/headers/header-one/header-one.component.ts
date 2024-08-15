import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    inject,
} from '@angular/core'
import { RouterModule } from '@angular/router'
import { AppStateService } from '@core/states/app-state.service'
import { AuthStateService } from '@main/auth/services/auth.service'

@Component({
    selector: 'app-header-one',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './header-one.component.html',
    styleUrls: ['./header-one.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderOneComponent implements OnInit {
    auth = inject(AuthStateService)
    appState = inject(AppStateService)

    @Input() sidenavToggleVisible = true
    @Output() sidenavToggle = new EventEmitter<void>()

    appName = this.appState.appName

    ngOnInit(): void {
        void 0
    }

    toggle(): void {
        this.sidenavToggle.next()
    }
}
