import { Route } from '@angular/router'
import { PageLayout } from '@main/layout/page-layout.enum'
import { setLayout } from '@main/layout/set-layout.resolver'

export type TransactionsRoute = {
    index: Route
}

export const getTransactionsRoute = () => {
    const route: TransactionsRoute = {
        index: {
            path: 'transactions',
            resolve: {
                layout: setLayout(PageLayout.Sidebar),
            },
            loadComponent: () =>
                import('./transactions').then((m) => m.TransactionsComponent),
        },
    }
    return route
}
