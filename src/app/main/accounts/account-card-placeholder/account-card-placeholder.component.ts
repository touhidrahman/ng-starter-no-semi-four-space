import { Component, input } from '@angular/core'
import { RouterLink } from '@angular/router'
import { SpartanImports } from '@core/ui/spartan-imports'

@Component({
    selector: 'app-account-card-placeholder',
    imports: [...SpartanImports, RouterLink],
    templateUrl: './account-card-placeholder.component.html',
    styleUrl: './account-card-placeholder.component.css',
})
export class AccountCardPlaceholderComponent {
    routePath = input<string>('')
    title = input<string>("You haven't added any accounts yet.")
}
