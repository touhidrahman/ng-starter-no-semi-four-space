import { Component } from '@angular/core'
import { AccountCardComponent } from '@main/accounts/account-card/account-card.component'
import { AccountCardPlaceholderComponent } from '@main/accounts/account-card-placeholder/account-card-placeholder.component'
import { DashboardAccountSectionHeaderComponent } from '@main/accounts/dashboard-account-section-header/dashboard-account-section-header.component'

@Component({
    selector: 'app-accounts-list',
    imports: [
        AccountCardComponent,
        AccountCardPlaceholderComponent,
        DashboardAccountSectionHeaderComponent,
    ],
    templateUrl: './accounts-list.component.html',
    styleUrl: './accounts-list.component.css',
})
export class AccountsListComponent {}
