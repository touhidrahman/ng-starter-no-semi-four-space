import { Component, EventEmitter, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterLink } from '@angular/router'
import { SpartanImports } from '@core/ui/spartan-imports'

@Component({
    selector: 'app-transactions-header',
    templateUrl: './transactions-header.html',
    imports: [...SpartanImports, FormsModule, RouterLink],
})
export class TransactionsHeader {
    @Output() searchChange = new EventEmitter<string>()
    searchTerm = ''

    onSearchChange() {
        this.searchChange.emit(this.searchTerm)
    }
}
