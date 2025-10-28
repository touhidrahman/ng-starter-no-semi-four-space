import { Component } from '@angular/core'
import { SpartanImports } from '@core/ui/spartan-imports'

@Component({
    selector: 'app-transactions-header',
    templateUrl: './transactions-header.html',
    imports: [...SpartanImports],
})
export class TransactionsHeader {}
