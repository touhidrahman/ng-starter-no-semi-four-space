import { CommonModule } from '@angular/common'
import { Component, computed, OnInit, signal } from '@angular/core'
import { AppwriteTableClient } from '@core/client/appwrite'
import { Account, AccountTypeEnum } from '@core/models/account.model'
import { AccountCardComponent } from '@main/accounts/account-card/account-card.component'
import { AccountCardPlaceholderComponent } from '@main/accounts/account-card-placeholder/account-card-placeholder.component'
import { DashboardAccountSectionHeaderComponent } from '@main/accounts/dashboard-account-section-header/dashboard-account-section-header.component'

@Component({
    selector: 'app-accounts-list',
    standalone: true,
    imports: [
        AccountCardComponent,
        AccountCardPlaceholderComponent,
        DashboardAccountSectionHeaderComponent,
        CommonModule,
    ],
    templateUrl: './accounts-list.component.html',
    styleUrls: ['./accounts-list.component.css'],
})
export class AccountsListComponent implements OnInit {
    tableClient = new AppwriteTableClient<any>('accounts')
    accountTypeEnum = AccountTypeEnum

    accounts = signal<Account[]>([])

    readonly accountTypes = [
        {
            key: AccountTypeEnum.Credit,
            title: 'Credit Cards',
            route: '/card/edit/new',
        },
        {
            key: AccountTypeEnum.Debit,
            title: 'Debit/Gift Cards',
            route: '/card/edit/new',
        },
        {
            key: AccountTypeEnum.Checking,
            title: 'Checking Accounts',
            route: '/bank-account/edit/new',
        },
        {
            key: AccountTypeEnum.Savings,
            title: 'Savings Accounts',
            route: '/bank-account/edit/new',
        },
        {
            key: AccountTypeEnum.Loan,
            title: 'Loan Accounts',
            route: '/loan/edit/new',
        },
    ] as const

    groupedAccounts = computed(() => {
        const map = {} as Record<
            string,
            { accounts: Account[]; totalBalance: number }
        >
        // initialize with known types so sections exist even if empty
        for (const t of this.accountTypes)
            map[String(t.key)] = { accounts: [], totalBalance: 0 }

        for (const a of this.accounts()) {
            const key = String(a?.type ?? 'unknown')
            if (!map[key]) map[key] = { accounts: [], totalBalance: 0 }
            map[key].accounts.push(a)
            map[key].totalBalance += a.balance ?? 0 // treat undefined balance as 0
        }
        return map
    })

    ngOnInit() {
        this.loadAccounts()
    }

    async loadAccounts() {
        const accounts = await this.tableClient.getDocuments()
        this.accounts.set(accounts ?? [])
        console.info('Loaded accounts:', accounts)
    }
}
