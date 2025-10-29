import { Component, input } from '@angular/core'
import { Category } from '@core/models/category.model'
import { SpartanImports } from '@core/ui/spartan-imports'

@Component({
    selector: 'app-categories-table',
    templateUrl: './categories-table.html',
    imports: [...SpartanImports],
})
export class CategoriesTable {
    categories = input<Category[]>()
}
