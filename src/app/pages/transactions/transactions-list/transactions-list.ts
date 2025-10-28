import { Component, computed, signal } from '@angular/core'
import {
    Transaction,
    TransactionCategory,
} from '@core/models/transaction.model'
import { Pagination } from '@main/transactions/pagination/pagination'
import { TransactionsHeader } from '@main/transactions/transactions-header/transactions-header'
import { TransactionsTable } from '@main/transactions/transactions-table/transactions-table'

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
            date: '2023-01-01',
            payee: 'John Doe',
            category: TransactionCategory.FoodAndDrink,
            account: 'Checking',
        },
        {
            id: '2',
            amount: 200,
            date: '2023-01-02',
            payee: 'Jane Smith',
            category: TransactionCategory.Shopping,
            account: 'Credit Card',
        },
        {
            id: '3',
            amount: 50,
            date: '2023-01-03',
            payee: 'Mike Johnson',
            category: TransactionCategory.Transport,
            account: 'Savings',
        },
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
                tx.category.toLowerCase().includes(term) ||
                tx.account.toLowerCase().includes(term),
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
