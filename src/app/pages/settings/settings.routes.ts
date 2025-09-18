import { Route } from '@angular/router'

export type SettingsRoutes = {
    index: Route
}

export const getSettingsRoutes = (): SettingsRoutes => ({
    index: {
        path: '',
        loadComponent: () =>
            import('./settings').then((m) => m.SettingsComponent),
    },
})
