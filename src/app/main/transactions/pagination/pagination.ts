import { Component, EventEmitter, input, Output } from '@angular/core'
import { SpartanImports } from '@core/ui/spartan-imports'

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.html',
    imports: [...SpartanImports],
})
export class Pagination {
    totalItems = input<number>(0)
    itemsPerPage = input<number>(2)
    currentPage = input<number>(1)

    @Output() pageChange = new EventEmitter<number>()

    get totalPages(): number {
        return Math.ceil(this.totalItems() / this.itemsPerPage())
    }

    goToPage(page: number) {
        if (page >= 1 && page <= this.totalPages) {
            this.pageChange.emit(page)
        }
    }
}
