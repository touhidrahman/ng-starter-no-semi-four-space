import { Component } from '@angular/core'
import { SpartanImports } from '@core/ui/spartan-imports'

@Component({
    selector: 'app-transaction-edit',
    templateUrl: './transaction-edit.html',
    imports: [...SpartanImports],
})
export class TransactionEdit {}
