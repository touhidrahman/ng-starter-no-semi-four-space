import { Route } from '@angular/router'
import { PageLayout } from '@main/layout/page-layout.enum'
import { setLayout } from '@main/layout/set-layout.resolver'

export type TransactionRoutes = {
    index: Route
    transactionEdit: Route
}

export function getTransactionRoutes(): TransactionRoutes {
    return {
        index: {
            path: 'transactions',
            title: 'Transactions',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () =>
                import('./transactions-list/transactions-list').then(
                    (m) => m.TransactionsList,
                ),
        },
        transactionEdit: {
            path: 'transactions/edit/new',
            title: 'Add New Transaction ',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () =>
                import('./transaction-edit/transaction-edit').then(
                    (m) => m.TransactionEdit,
                ),
        },
    }
}
