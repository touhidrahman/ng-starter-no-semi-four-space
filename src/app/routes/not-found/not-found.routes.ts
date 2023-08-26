import { Route } from '@angular/router'
import { PageLayout } from '@features/layout/page-layout.enum'
import { setLayout } from '@features/layout/set-layout.resolver'

export type NotFoundPageRoutes = {
    index: Route
}

export function getNotFoundPageRoutes(): NotFoundPageRoutes {
    return {
        index: {
            path: '**',
            title: '404',
            resolve: { layout: setLayout(PageLayout.Center) },
            loadComponent: () => import('./not-found.page'),
        },
    }
}
