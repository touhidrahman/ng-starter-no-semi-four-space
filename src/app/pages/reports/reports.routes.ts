import { Route } from '@angular/router'
import { PageLayout } from '@main/layout/page-layout.enum'
import { setLayout } from '@main/layout/set-layout.resolver'

export type ReportsRoute = {
    index: Route
}

export const getReportsRoutes = () => {
    const route: ReportsRoute = {
        index: {
            path: 'reports',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () =>
                import('./reports').then((m) => m.ReportsComponent),
        },
    }

    return route
}
