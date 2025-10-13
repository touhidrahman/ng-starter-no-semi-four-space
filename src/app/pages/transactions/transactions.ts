import { Component } from '@angular/core'
import { PrimeModules } from '@core/ui/primeng'
import { AccountType } from '@pages/accounts/accounts'

export type Transaction = {
    id: string
    date: string
    account: AccountType
    category: string
    amount: number
    payee?: string
    type: TransactionType
}

export enum TransactionType {
    Debit = 'Debit',
    Credit = 'Credit',
}

@Component({
    selector: 'app-transactions',
    templateUrl: './transactions.html',
    imports: [PrimeModules],
})
export class TransactionsComponent {
    TransactionType = TransactionType
    userCurrency = 'USD'

    searchQuery = ''
    accountTypes = [
        { label: 'All', value: null },
        ...Object.values(AccountType).map((type) => ({
            label: type,
            value: type,
        })),
    ]

    selectedAccountType: AccountType | null = null

    transactions: Transaction[] = [
        {
            id: '1',
            date: '2024-10-01',
            account: AccountType.Bank,
            category: 'Groceries',
            amount: 150.75,
            payee: 'Supermarket',
            type: TransactionType.Debit,
        },
        {
            id: '2',
            date: '2024-10-02',
            account: AccountType.CreditCard,
            category: 'Salary',
            amount: 2500.0,
            payee: 'Employer Inc.',
            type: TransactionType.Credit,
        },
        {
            id: '3',
            date: '2024-10-03',
            account: AccountType.Wallet,
            category: 'Dining',
            amount: 45.5,
            payee: 'Restaurant',
            type: TransactionType.Debit,
        },
    ]
}
