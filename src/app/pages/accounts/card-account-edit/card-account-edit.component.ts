import { Component, inject } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { AppwriteTableClient } from '@core/client/appwrite'
import { SpartanImports } from '@core/ui/spartan-imports'

@Component({
    selector: 'app-card-account-edit',
    imports: [...SpartanImports, ReactiveFormsModule],
    templateUrl: './card-account-edit.component.html',
    styleUrl: './card-account-edit.component.css',
})
export class CardAccountEditComponent {
    private fb = inject(FormBuilder)
    tableClient = new AppwriteTableClient<any>('accounts')

    cardForm = this.fb.group({
        name: ['', Validators.required],
        type: ['', Validators.required],
        accountName: [''],
        accountNumber: [''],
        card_expiry: [''],
        balance: [''],
        monthlyDueDate: [''],
        monthlyStatementDate: [''],
        card_limit: [''],
        useForNetWorth: [false],
    })

    async saveCard() {
        if (this.cardForm.valid) {
            const cardData = this.cardForm.value
            const expiryInput = cardData.card_expiry ?? '' // Expecting format "MM/YY"
            const [month, year] = expiryInput
                .split('/')
                .map((part) => Number.parseInt(part, 10))
            const fullYear = year + 2000 // Convert "YY" to "20YY"
            const expiryDate = new Date(fullYear, month - 1) // Month is 0-indexed
            const saved = await this.tableClient.createDocument({
                ...cardData,
                card_expiry: expiryDate,
            })
            console.info('Card saved:', saved)
        } else {
            console.info('Form is invalid')
        }
    }
}
