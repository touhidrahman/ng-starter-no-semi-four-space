import { Component, inject } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { AppwriteTableClient } from '@core/client/appwrite'
import { AccountType } from '@core/models/account.model'
import { SpartanImports } from '@core/ui/spartan-imports'

@Component({
    selector: 'app-loan-account-edit',
    imports: [...SpartanImports, ReactiveFormsModule],
    templateUrl: './loan-account-edit.component.html',
    styleUrl: './loan-account-edit.component.css',
})
export class LoanAccountEditComponent {
    private fb = inject(FormBuilder)
    tableClient = new AppwriteTableClient<any>('accounts')
    accountTypeEnum = AccountType

    loanForm = this.fb.group({
        name: ['', Validators.required],
        type: ['Loan'],
        accountName: [''],
        accountNumber: [''],
        balance: [''],
        bankName: [''],
        loan_subject: [''],
        currency: ['USD'],
        useForNetWorth: [false],
        loan_startDate: [''],
        loan_endDate: [''],
        loan_interestRate: [''],
        monthlyDueDate: [''],
    })

    async saveAccount() {
        if (this.loanForm.valid) {
            const loanData = this.loanForm.value
            const saved = await this.tableClient.createDocument({
                ...loanData,
            })
            console.info('Loan saved:', saved)
        } else {
            console.info('Form is invalid')
        }
    }
}
