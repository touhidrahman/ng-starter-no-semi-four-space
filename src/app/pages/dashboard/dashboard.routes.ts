import { Route } from '@angular/router'
import { PageLayout } from '@main/layout/page-layout.enum'
import { setLayout } from '@main/layout/set-layout.resolver'

export type DashboardRoutes = {
    index: Route
    redirect: Route
}

export function getDashboardRoutes(): DashboardRoutes {
    return {
        index: {
            path: 'dashboard',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () =>
                import('./dashboard').then((m) => m.DashboardComponent),
        },
        redirect: {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full',
        },
    }
}
