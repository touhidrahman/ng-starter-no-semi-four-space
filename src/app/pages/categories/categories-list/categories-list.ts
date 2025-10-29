import { Component } from '@angular/core'
import { Category } from '@core/models/category.model'
import { CategoriesTable } from '@main/categories/categories-table/categories-table'

@Component({
    selector: 'app-categories-list',
    templateUrl: './categories-list.html',
    imports: [CategoriesTable],
})
export class CategoriesList {
    categories: Category[] = [
        {
            id: 1,
            name: 'Food',
            icon: 'restaurant_menu',
            subcategories: [
                { id: 11, name: 'Groceries', icon: 'local_grocery_store' },
                { id: 12, name: 'Dining Out', icon: 'local_dining' },
            ],
        },
        {
            id: 2,
            name: 'Transport',
            icon: 'directions_car',
            subcategories: [
                { id: 21, name: 'Public Transport', icon: 'commute' },
                { id: 22, name: 'Rideshare', icon: 'ride_share' },
            ],
        },
        {
            id: 3,
            name: 'Utilities',
            icon: 'flash_on',
            subcategories: [
                { id: 31, name: 'Electricity', icon: 'lightbulb' },
                { id: 32, name: 'Water', icon: 'water_drop' },
            ],
        },
        {
            id: 4,
            name: 'Entertainment',
            icon: 'movie',
            subcategories: [
                { id: 41, name: 'Movies', icon: 'theaters' },
                { id: 42, name: 'Concerts', icon: 'music_note' },
            ],
        },
        {
            id: 5,
            name: 'Health',
            icon: 'health_and_safety',
            subcategories: [
                { id: 51, name: 'Doctor', icon: 'medical_services' },
                { id: 52, name: 'Pharmacy', icon: 'local_pharmacy' },
            ],
        },
        {
            id: 6,
            name: 'Education',
            icon: 'school',
            subcategories: [
                { id: 61, name: 'Primary', icon: 'school' },
                { id: 62, name: 'Secondary', icon: 'school' },
            ],
        },
    ]
}
