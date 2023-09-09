import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AppStateService } from '@core/states/app-state.service'
import { TokenSharingService } from '@main/auth/services/token-sharing.service'
import { LayoutCenteredComponent } from '@main/layout/layout-centered/layout-centered.component'
import { LayoutDefaultComponent } from '@main/layout/layout-default/layout-default.component'
import { LayoutSidebarComponent } from '@main/layout/layout-sidebar/layout-sidebar.component'
import { PageLayout } from '@main/layout/page-layout.enum'
import { PageLayoutService } from '@main/layout/page-layout.service'
import { take, timer } from 'rxjs'

@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    imports: [
        CommonModule,
        RouterModule,
        LayoutCenteredComponent,
        LayoutDefaultComponent,
        LayoutSidebarComponent,
    ],
})
export class AppComponent {
    readonly PageLayout = PageLayout

    constructor(
        public appState: AppStateService,
        public pageLayoutService: PageLayoutService,
        private tokenSharingService: TokenSharingService,
    ) {
        this.tokenSharingService.init()

        // stop initial loading spinner after 1 sec
        timer(1000)
            .pipe(take(1))
            .subscribe({ next: () => this.appState.stopLoading() })
    }
}
