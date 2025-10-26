import { Component } from '@angular/core'
import { AccountCardComponent } from '@main/accounts/account-card/account-card.component'
import { AccountCardPlaceholderComponent } from '@main/accounts/account-card-placeholder/account-card-placeholder.component'
import { DashboardAccountSectionHeaderComponent } from '@main/accounts/dashboard-account-section-header/dashboard-account-section-header.component'
import { DashboardAccountWidgetComponent } from '@main/accounts/dashboard-account-widget/dashboard-account-widget.component'

@Component({
    selector: 'app-home',
    imports: [
        AccountCardComponent,
        AccountCardPlaceholderComponent,
        DashboardAccountWidgetComponent,
        DashboardAccountSectionHeaderComponent,
    ],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export default class HomeComponent {}
