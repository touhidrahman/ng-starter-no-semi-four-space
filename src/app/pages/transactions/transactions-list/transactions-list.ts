import { Component, computed, signal } from '@angular/core'
import { Account, AccountTypeEnum } from '@core/models/account.model'
import { Category } from '@core/models/category.model'
import { Transaction } from '@core/models/transaction.model'
import { Pagination } from '@main/transactions/pagination/pagination'
import { TransactionsHeader } from '@main/transactions/transactions-header/transactions-header'
import { TransactionsTable } from '@main/transactions/transactions-table/transactions-table'

const categories: Category[] = [
    {
        id: 1,
        name: 'Food & Drink',
        subcategories: [
            { id: 1, name: 'Groceries', icon: null, category: null },
            { id: 2, name: 'Restaurants', icon: null, category: null },
        ],
    },
    {
        id: 2,
        name: 'Shopping',
        subcategories: [
            { id: 3, name: 'Clothing', icon: null, category: null },
            { id: 4, name: 'Electronics', icon: null, category: null },
        ],
    },
    {
        id: 3,
        name: 'Transport',
        subcategories: [
            { id: 5, name: 'Public Transport', icon: null, category: null },
            { id: 6, name: 'Taxi', icon: null, category: null },
        ],
    },
]

const accounts: Account[] = [
    {
        $id: '1',
        type: AccountTypeEnum.Checking,
        name: 'Checking',
        balance: 1000,
    },
    { $id: '2', type: AccountTypeEnum.Savings, name: 'Savings', balance: 5000 },
    {
        $id: '3',
        type: AccountTypeEnum.Credit,
        name: 'Credit Card',
        balance: -200,
    },
]

@Component({
    selector: 'app-transactions-list',
    templateUrl: './transactions-list.html',
    imports: [TransactionsHeader, TransactionsTable, Pagination],
})
export class TransactionsList {
    transactions: Transaction[] = [
        {
            id: '1',
            amount: 100,
            TransactionTime: '2023-01-01',
            direction: 'expense',
            payee: 'John Doe',
            category: categories[0],
            account: accounts[0],
        } as Transaction,
        {
            id: '2',
            amount: 50,
            direction: 'income',
            TransactionTime: '2023-01-02',
            payee: 'Jane Smith',
            category: categories[1],
            account: accounts[1],
        } as Transaction,
        {
            id: '3',
            amount: 75,
            TransactionTime: '2023-01-03',
            direction: 'expense',
            payee: 'Acme Corp',
            category: categories[2],
            account: accounts[2],
        } as Transaction,
    ]

    total = this.transactions.length
    currentPage = signal(1)
    itemsPerPage = signal(2)
    searchTerm = signal('')

    filteredTransactions = computed(() => {
        const term = this.searchTerm().toLowerCase()
        return this.transactions.filter(
            (tx) =>
                tx.payee.toLowerCase().includes(term) ||
                tx.category?.name.toLowerCase().includes(term) ||
                tx.account.name.toLowerCase().includes(term),
        )
    })

    paginatedTransactions = computed(() => {
        const start = (this.currentPage() - 1) * this.itemsPerPage()
        const end = start + this.itemsPerPage()
        return this.filteredTransactions().slice(start, end)
    })

    onPageChange(page: number) {
        this.currentPage.set(page)
    }

    onSearchChange(searchTerm: string) {
        this.searchTerm.set(searchTerm)
        this.currentPage.set(1)
    }
}
