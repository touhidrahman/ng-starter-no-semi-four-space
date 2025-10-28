import { CurrencyPipe, DatePipe, NgClass } from '@angular/common'
import { Component, input } from '@angular/core'
import { Transaction } from '@core/models/transaction.model'
import { SpartanImports } from '@core/ui/spartan-imports'

@Component({
    selector: 'app-transactions-table',
    templateUrl: './transactions-table.html',
    imports: [...SpartanImports, DatePipe, CurrencyPipe, NgClass],
})
export class TransactionsTable {
    transactions = input<Transaction[]>([])
}
