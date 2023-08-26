import { Route } from '@angular/router'
import { PageLayout } from '@features/layout/page-layout.enum'
import { setLayout } from '@features/layout/set-layout.resolver'

export type HomeRoutes = {
    index: Route
    redirect: Route
}

export function getHomeRoutes(): HomeRoutes {
    return {
        index: {
            path: '',
            title: 'Home',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () => import('./home.page'),
        },
        redirect: {
            path: 'home',
            redirectTo: '',
            pathMatch: 'full',
        },
    }
}
