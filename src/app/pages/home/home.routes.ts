import { Route } from '@angular/router'
import { PageLayout } from '@main/layout/page-layout.enum'
import { setLayout } from '@main/layout/set-layout.resolver'

export type HomeRoutes = {
    index: Route
    redirect: Route
}

export const homeRoutes: HomeRoutes = {
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
