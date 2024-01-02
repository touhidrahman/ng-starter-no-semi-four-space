import { Route } from '@angular/router'
import { PageLayout } from '@main/layout/page-layout.enum'
import { setLayout } from '@main/layout/set-layout.resolver'

export type NotFoundPageRoutes = {
    index: Route
}

export const notFoundPageRoutes: NotFoundPageRoutes = {
    index: {
        path: '**',
        title: '404',
        resolve: { layout: setLayout(PageLayout.Center) },
        loadComponent: () => import('./not-found.page'),
    },
}
