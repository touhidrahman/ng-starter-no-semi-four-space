import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AppwriteClient } from '@core/client/appwrite'
import { AppStateService } from '@core/states/app-state.service'
import { TokenSharingService } from '@main/auth/services/token-sharing.service'
import { LayoutCenteredComponent } from '@main/layout/layout-centered/layout-centered.component'
import { LayoutDefaultComponent } from '@main/layout/layout-default/layout-default.component'
import { LayoutSidebarComponent } from '@main/layout/layout-sidebar/layout-sidebar.component'
import { PageLayout } from '@main/layout/page-layout.enum'
import { PageLayoutService } from '@main/layout/page-layout.service'

interface AppwriteLog {
    date: Date
    method: string
    path: string
    status: number
    response: string
}

@Component({
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
    appState = inject(AppStateService)
    pageLayoutService = inject(PageLayoutService)
    private tokenSharingService = inject(TokenSharingService)

    status: 'idle' | 'loading' | 'success' | 'error' = 'idle'
    logs: AppwriteLog[] = []
    showLogs = false

    readonly PageLayout = PageLayout

    constructor() {
        this.tokenSharingService.init()
    }

    async ngOnInit() {
        this.sendPing()
    }

    async sendPing() {
        if (this.status === 'loading') return
        this.status = 'loading'

        try {
            const result = await AppwriteClient.ping()
            const log: AppwriteLog = {
                date: new Date(),
                method: 'GET',
                path: '/v1/ping',
                status: 200,
                response: JSON.stringify(result),
            }
            this.logs = [log, ...this.logs]
            this.status = 'success'
        } catch (err: any) {
            const log: AppwriteLog = {
                date: new Date(),
                method: 'GET',
                path: '/v1/ping',
                status: err instanceof Error ? 500 : err.code,
                response:
                    err instanceof Error ? 'Something went wrong' : err.message,
            }
            this.logs = [log, ...this.logs]
            this.status = 'error'
        }
        this.showLogs = true
    }
}
