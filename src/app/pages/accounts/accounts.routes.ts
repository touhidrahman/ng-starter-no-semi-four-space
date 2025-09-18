import { Route } from '@angular/router'
import { PageLayout } from '@main/layout/page-layout.enum'
import { setLayout } from '@main/layout/set-layout.resolver'

export type AccountsRoute = {
    index: Route
}

export function getAccountsRoutes(): AccountsRoute {
    return {
        index: {
            path: 'accounts',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () =>
                import('./accounts').then((m) => m.AccountsComponent),
        },
    }
}
