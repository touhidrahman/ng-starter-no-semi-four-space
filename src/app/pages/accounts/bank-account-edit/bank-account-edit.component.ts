import { Component, inject } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { AppwriteTableClient } from '@core/client/appwrite'
import { SpartanImports } from '@core/ui/spartan-imports'

@Component({
    selector: 'app-bank-account-edit',
    imports: [...SpartanImports, ReactiveFormsModule],
    templateUrl: './bank-account-edit.component.html',
    styleUrl: './bank-account-edit.component.css',
})
export class BankAccountEditComponent {
    private fb = inject(FormBuilder)
    tableClient = new AppwriteTableClient<any>('accounts')

    bankForm = this.fb.group({
        name: ['', Validators.required],
        type: [''],
        accountName: [''],
        accountNumber: [''],
        balance: [''],
        bankName: [''],
        bank_routing: [''],
        currency: [''],
        useForNetWorth: [false],
    })

    async saveAccount() {
        if (this.bankForm.valid) {
            const cardData = this.bankForm.value
            const saved = await this.tableClient.createDocument({
                ...cardData,
            })
            console.info('Card saved:', saved)
        } else {
            console.info('Form is invalid')
        }
    }
}
