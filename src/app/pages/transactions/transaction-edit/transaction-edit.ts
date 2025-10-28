import { Component, inject } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { AppwriteTableClient } from '@core/client/appwrite'
import { SpartanImports } from '@core/ui/spartan-imports'

@Component({
    selector: 'app-transaction-edit',
    templateUrl: './transaction-edit.html',
    imports: [...SpartanImports, ReactiveFormsModule],
})
export class TransactionEdit {
    private fb = inject(FormBuilder)
    tableClient = new AppwriteTableClient<any>('transactions')

    transactionForm = this.fb.group({
        description: ['', Validators.required],
        amount: ['', [Validators.required, Validators.min(0.01)]],
        type: ['expense', Validators.required],
        category: [''],
        account: ['', Validators.required],
        date: [new Date().toISOString().split('T')[0], Validators.required],
        notes: [''],
        tags: [''],
    })

    async saveTransaction() {
        if (this.transactionForm.valid) {
            const transactionData = this.transactionForm.value
            const saved = await this.tableClient.createDocument({
                ...transactionData,
            })
            console.info('Transaction saved:', saved)
        } else {
            console.info('Form is invalid')
        }
    }
}
