import { Route } from '@angular/router'
import { PageLayout } from '@main/layout/page-layout.enum'
import { setLayout } from '@main/layout/set-layout.resolver'

export type CategoryRoutes = {
    index: Route
    categoriesEdit: Route
}

export function getCategoryRoutes(): CategoryRoutes {
    return {
        index: {
            path: 'categories',
            title: 'Categories',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () =>
                import('./categories-list/categories-list').then(
                    (m) => m.CategoriesList,
                ),
        },
        categoriesEdit: {
            path: 'categories/edit/new',
            title: 'Add New Category',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () =>
                import('./categories-edit/categories-edit').then(
                    (m) => m.CategoriesEdit,
                ),
        },
    }
}
