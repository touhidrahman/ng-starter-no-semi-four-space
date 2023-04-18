import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { TokenSharingService } from '@core/auth/services/token-sharing.service'
import { AppStateService } from '@core/states/app-state.service'
import { LayoutCenteredComponent } from '@features/layout/layout-centered/layout-centered.component'
import { LayoutDefaultComponent } from '@features/layout/layout-default/layout-default.component'
import { LayoutSidebarComponent } from '@features/layout/layout-sidebar/layout-sidebar.component'
import { PageLayout } from '@features/layout/page-layout.enum'
import { PageLayoutService } from '@features/layout/page-layout.service'
import { take, timer } from 'rxjs'

@Component({
    standalone: true,
    selector: 'app-root',
    template: `
        <div *ngIf="appState.loading" class="fixed z-50 h-full w-full">
            <div class="app-loading-container mx-auto">
                <svg class="spinner" viewBox="25 25 50 50">
                    <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
                </svg>
            </div>
        </div>
        <ng-container [ngSwitch]="pageLayoutService.layout$ | async">
            <app-layout-default *ngSwitchCase="PageLayout.Default"></app-layout-default>
            <app-layout-centered *ngSwitchCase="PageLayout.Center"></app-layout-centered>
            <app-layout-sidebar *ngSwitchCase="PageLayout.Sidebar"></app-layout-sidebar>
            <router-outlet *ngSwitchCase="PageLayout.Blank"></router-outlet>
            <app-layout-default *ngSwitchDefault></app-layout-default>
        </ng-container>
    `,
    imports: [CommonModule, RouterModule, LayoutCenteredComponent, LayoutDefaultComponent, LayoutSidebarComponent],
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
