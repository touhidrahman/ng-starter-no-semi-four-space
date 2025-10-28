import { Route } from '@angular/router'
import { PageLayout } from '@main/layout/page-layout.enum'
import { setLayout } from '@main/layout/set-layout.resolver'

export type CategoryRoutes = {
    index: Route
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
    }
}
