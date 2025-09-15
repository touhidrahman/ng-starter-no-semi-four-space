import { Component } from '@angular/core'
import { AccountCardComponent } from '@main/accounts/account-card/account-card'

export type Account = {
    id: number
    name: string
    email: string
    type: AccountType
    subType?: string
    balance: number
    iconClass?: string
}

export enum AccountType {
    Bank = 'Bank',
    CreditCard = 'Credit Card',
    Wallet = 'Wallet',
    Investment = 'Investment',
}

@Component({
    selector: 'app-accounts',
    templateUrl: './accounts.html',
    imports: [AccountCardComponent],
})
export class AccountsComponent {
    userCurrency = 'USD'
    accountTypes = Object.values(AccountType)

    accounts: Account[] = [
        {
            id: 1,
            name: 'Personal Checking',
            email: 'personal@example.com',
            type: AccountType.Bank,
            subType: 'Checking',
            balance: 1000,
            iconClass: 'pi  pi-building-columns',
        },
        {
            id: 2,
            name: 'Savings Account',
            email: 'savings@example.com',
            type: AccountType.Bank,
            subType: 'Savings',
            balance: 5000,
            iconClass: 'pi  pi-building-columns',
        },
        {
            id: 3,
            name: 'Credit Card',
            email: 'credit@example.com',
            type: AccountType.CreditCard,
            subType: 'Card',
            balance: 2000,
            iconClass: 'pi pi-credit-card',
        },
        {
            id: 4,
            name: 'Cash Wallet',
            email: 'cash@example.com',
            type: AccountType.Wallet,
            subType: 'Cash',
            balance: 3000,
            iconClass: 'pi pi-wallet',
        },
        {
            id: 5,
            name: 'Investment Account',
            email: 'investment@example.com',
            type: AccountType.Investment,
            subType: 'Stocks',
            balance: 10000,
            iconClass: 'pi pi-chart-line',
        },
    ]

    getAccountsByType(type: string): Account[] {
        return this.accounts.filter((account) => account.type === type)
    }
}
