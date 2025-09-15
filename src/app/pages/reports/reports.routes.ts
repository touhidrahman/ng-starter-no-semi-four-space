import { Route } from '@angular/router'

export type ReportsRoute = {
    index: Route
}

export const getReportsRoutes = () => {
    const route: ReportsRoute = {
        index: {
            path: 'reports',
            loadComponent: () =>
                import('./reports').then((m) => m.ReportsComponent),
        },
    }

    return route
}
