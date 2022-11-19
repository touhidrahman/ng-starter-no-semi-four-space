import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router'
import { TokenSharingService } from '@core/auth/services/token-sharing.service'
import { AppLayoutType } from '@core/models'
import { LayoutCenteredComponent } from '@features/layout/layout-centered/layout-centered.component'
import { LayoutDefaultComponent } from '@features/layout/layout-default/layout-default.component'
import { LayoutSidebarComponent } from '@features/layout/layout-sidebar/layout-sidebar.component'
import { filter, map, mergeMap, Observable } from 'rxjs'

@Component({
    standalone: true,
    selector: 'app-root',
    template: `
        <ng-container [ngSwitch]="layout$ | async">
            <app-layout-default *ngSwitchCase="AppLayoutType.Default"></app-layout-default>
            <app-layout-centered *ngSwitchCase="AppLayoutType.Center"></app-layout-centered>
            <app-layout-sidebar *ngSwitchCase="AppLayoutType.Sidebar"></app-layout-sidebar>
            <router-outlet *ngSwitchCase="AppLayoutType.Blank"></router-outlet>
            <app-layout-default *ngSwitchDefault></app-layout-default>
        </ng-container>
    `,
    imports: [CommonModule, RouterModule, LayoutCenteredComponent, LayoutDefaultComponent, LayoutSidebarComponent],
})
export class AppComponent {
    layout$: Observable<AppLayoutType> = this.getLayoutType$()

    readonly AppLayoutType = AppLayoutType

    constructor(
        private tokenSharingService: TokenSharingService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
    ) {
        this.tokenSharingService.init()
    }

    private getLayoutType$(): Observable<AppLayoutType> {
        return this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
            map(() => this.activatedRoute),
            map((route) => {
                while (route.firstChild) route = route.firstChild
                return route
            }),
            filter((route) => route.outlet === 'primary'),
            mergeMap((route) => route.data),
            map(({ layout }) => layout),
        )
    }
}
