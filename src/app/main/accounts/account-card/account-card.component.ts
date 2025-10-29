import { CommonModule, CurrencyPipe } from '@angular/common'
import { Component, computed, input } from '@angular/core'
import { Account, AccountType } from '@core/models/account.model'
import { IconImports } from '@core/ui/icon-imports'
import { NgIcon, provideIcons } from '@ng-icons/core'

@Component({
    selector: 'app-account-card',
    imports: [CurrencyPipe, CommonModule, NgIcon],
    providers: [provideIcons(IconImports)],
    templateUrl: './account-card.component.html',
    styleUrl: './account-card.component.css',
})
export class AccountCardComponent {
    account = input.required<Account>()
    accountTypeEnum = AccountType

    icon = computed(() => {
        switch (this.account()?.type) {
            case AccountType.Debit:
            case AccountType.Credit: {
                if (this.account()?.accountNumber?.startsWith('3')) {
                    return 'simpleAmericanexpress'
                }
                if (this.account()?.accountNumber?.startsWith('4')) {
                    return 'simpleVisa'
                }
                if (this.account()?.accountNumber?.startsWith('5')) {
                    return 'simpleMastercard'
                }
                if (this.account()?.accountNumber?.startsWith('6')) {
                    return 'simpleDiscover'
                }
                return 'heroCreditCard'
            }
            case AccountType.Checking: {
                return 'heroBuildingLibrary'
            }
            case AccountType.Savings:
                return 'heroBuildingLibrary'
            case AccountType.Loan:
                return 'heroBanknotes'
            case AccountType.Hand:
                return 'heroWallet'
            default:
                return 'heroBanknotes'
        }
    })
}
