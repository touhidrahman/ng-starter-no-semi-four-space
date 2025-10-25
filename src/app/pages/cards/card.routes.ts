import { Route } from '@angular/router'
import { PageLayout } from '@main/layout/page-layout.enum'
import { setLayout } from '@main/layout/set-layout.resolver'

export type CardRoutes = {
    create: Route
}

export function getCardRoutes(): CardRoutes {
    return {
        create: {
            path: 'card/edit/new',
            title: 'Card',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () => import('./card-edit/card-edit.component').then(m => m.CardEditComponent),
        },
    }
}
