import { Component, EventEmitter, Input, Output } from '@angular/core'
import { RouterModule } from '@angular/router'
import { getAccountRoutes } from '@pages/accounts/account.routes'
import { getTransactionRoutes } from '@pages/transactions/transaction.routes'

@Component({
    selector: 'app-sidebar-one',
    templateUrl: './sidebar-one.html',
    styleUrls: ['./sidebar-one.scss'],
    imports: [RouterModule],
})
export class SidebarOneComponent {
    @Input() isOpen = true
    @Output() closeSidebar = new EventEmitter<void>()

    accountRoutes = getAccountRoutes()
    transactionRoutes = getTransactionRoutes()
    // budgetRoutes = getBudgetRoutes()
    // settingsRoutes = getSettingsRoutes()

    itemClick(_event: any) {
        this.closeSidebar.emit()
    }
}
