import { CommonModule, CurrencyPipe } from '@angular/common'
import { Component, input } from '@angular/core'
import { Account, AccountTypeEnum } from '@core/models/account.model'

@Component({
    selector: 'app-account-card',
    imports: [CurrencyPipe, CommonModule],
    templateUrl: './account-card.component.html',
    styleUrl: './account-card.component.css',
})
export class AccountCardComponent {
    account = input.required<Account>()
    accountTypeEnum = AccountTypeEnum
}
