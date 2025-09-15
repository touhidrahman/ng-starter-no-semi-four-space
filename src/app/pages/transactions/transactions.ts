import { Component } from '@angular/core'
import { AccountType } from '@pages/accounts/accounts'

export type Transaction = {
    id: string
    date: string
    account: string
    accountType: AccountType
    category: string
    type: string
    amount: number
}

@Component({
    selector: 'app-transactions',
    templateUrl: './transactions.html',
    imports: [],
})
export class TransactionsComponent {
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
            account: 'Personal Checking',
            accountType: AccountType.Bank,
            category: 'Groceries',
            type: 'Debit',
            amount: 150.75,
        },
        {
            id: '2',
            date: '2024-10-02',
            account: 'Credit Card',
            accountType: AccountType.CreditCard,
            category: 'Dining',
            type: 'Debit',
            amount: 60.0,
        },
        {
            id: '3',
            date: '2024-10-03',
            account: 'Savings Account',
            accountType: AccountType.Bank,
            category: 'Salary',
            type: 'Credit',
            amount: 2000.0,
        },
        {
            id: '4',
            date: '2024-10-04',
            account: 'Cash Wallet',
            accountType: AccountType.Wallet,
            category: 'Transport',
            type: 'Debit',
            amount: 20.0,
        },
    ]
}
