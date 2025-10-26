import { Route } from '@angular/router'
import { PageLayout } from '@main/layout/page-layout.enum'
import { setLayout } from '@main/layout/set-layout.resolver'

export type AccountRoutes = {
    cardCreate: Route
    cardUpdate: Route
    bankAccountCreate: Route
    bankAccountUpdate: Route
}

export function getAccountRoutes(): AccountRoutes {
    return {
        cardCreate: {
            path: 'card/edit/new',
            title: 'Card',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () => import('./card-account-edit/card-account-edit.component').then(m => m.CardAccountEditComponent),
        },
        cardUpdate: {
            path: 'card/edit/:id',
            title: 'Edit Card',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () => import('./card-account-edit/card-account-edit.component').then(m => m.CardAccountEditComponent),
        },
        bankAccountCreate: {
            path: 'bank-account/edit/new',
            title: 'Bank Account',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () => import('./bank-account-edit/bank-account-edit.component').then(m => m.BankAccountEditComponent),
        },
        bankAccountUpdate: {
            path: 'bank-account/edit/:id',
            title: 'Edit Bank Account',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () => import('./bank-account-edit/bank-account-edit.component').then(m => m.BankAccountEditComponent),
        },
    }
}
