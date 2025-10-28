import { Component, EventEmitter, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { SpartanImports } from '@core/ui/spartan-imports'

@Component({
    selector: 'app-transactions-header',
    templateUrl: './transactions-header.html',
    imports: [...SpartanImports, FormsModule],
})
export class TransactionsHeader {
    @Output() searchChange = new EventEmitter<string>()
    searchTerm = ''

    onSearchChange() {
        console.warn(this.searchTerm)
        this.searchChange.emit(this.searchTerm)
    }
}
