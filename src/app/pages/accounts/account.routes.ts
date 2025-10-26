import { Route } from '@angular/router'
import { PageLayout } from '@main/layout/page-layout.enum'
import { setLayout } from '@main/layout/set-layout.resolver'

export type AccountRoutes = {
    index: Route
    cardCreate: Route
    cardUpdate: Route
    bankAccountCreate: Route
    bankAccountUpdate: Route
    loanAccountCreate: Route
    loanAccountUpdate: Route
}

export function getAccountRoutes(): AccountRoutes {
    return {
        index: {
            path: 'accounts',
            title: 'Accounts',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () =>
                import('./accounts-list/accounts-list.component').then(
                    (m) => m.AccountsListComponent,
                ),
        },
        cardCreate: {
            path: 'card/edit/new',
            title: 'Card',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () =>
                import('./card-account-edit/card-account-edit.component').then(
                    (m) => m.CardAccountEditComponent,
                ),
        },
        cardUpdate: {
            path: 'card/edit/:id',
            title: 'Edit Card',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () =>
                import('./card-account-edit/card-account-edit.component').then(
                    (m) => m.CardAccountEditComponent,
                ),
        },
        bankAccountCreate: {
            path: 'bank-account/edit/new',
            title: 'Bank Account',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () =>
                import('./bank-account-edit/bank-account-edit.component').then(
                    (m) => m.BankAccountEditComponent,
                ),
        },
        bankAccountUpdate: {
            path: 'bank-account/edit/:id',
            title: 'Edit Bank Account',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () =>
                import('./bank-account-edit/bank-account-edit.component').then(
                    (m) => m.BankAccountEditComponent,
                ),
        },
        loanAccountCreate: {
            path: 'loan-account/edit/new',
            title: 'Loan Account',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () =>
                import('./loan-account-edit/loan-account-edit.component').then(
                    (m) => m.LoanAccountEditComponent,
                ),
        },
        loanAccountUpdate: {
            path: 'loan-account/edit/:id',
            title: 'Edit Loan Account',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () =>
                import('./loan-account-edit/loan-account-edit.component').then(
                    (m) => m.LoanAccountEditComponent,
                ),
        },
    }
}
