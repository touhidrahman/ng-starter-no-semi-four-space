import { Component, input } from '@angular/core'
import { RouterLink } from '@angular/router'
import { SpartanImports } from '@core/ui/spartan-imports'

@Component({
    selector: 'app-dashboard-account-section-header',
    imports: [RouterLink, ...SpartanImports],
    templateUrl: './dashboard-account-section-header.component.html',
    styleUrl: './dashboard-account-section-header.component.css',
})
export class DashboardAccountSectionHeaderComponent {
    title = input.required()
    routePath = input<string>()
    accountType = input<string>()
    totalBalance = input<number>(0)
}
