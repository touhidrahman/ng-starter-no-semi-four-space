import { CommonModule } from '@angular/common'
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core'
import { RouterModule } from '@angular/router'
import { AppStateService } from '@core/states/app-state.service'
import { MaterialModules } from '@core/ui/material'
import { AuthStateService } from '@main/auth/services/auth.service'

@Component({
    selector: 'app-header-one',
    standalone: true,
    imports: [CommonModule, RouterModule, ...MaterialModules],
    templateUrl: './header-one.component.html',
    styleUrls: ['./header-one.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderOneComponent implements OnInit {
    @Input() sidenavToggleVisible = true
    @Output() sidenavToggle = new EventEmitter<void>()

    appName = this.appState.appName

    constructor(
        public auth: AuthStateService,
        public appState: AppStateService,
    ) {}

    ngOnInit(): void {
        void 0
    }

    toggle(): void {
        this.sidenavToggle.next()
    }
}
