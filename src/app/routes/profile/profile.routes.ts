import { Route } from '@angular/router'
import { authGuardFn } from '@core/auth/guards/auth.guard'
import { PageLayout } from '@features/layout/page-layout.enum'
import { setLayout } from '@features/layout/set-layout.resolver'

export type ProfileRoutes = {
    index: Route
}

export function getProfileRoutes(): ProfileRoutes {
    return {
        index: {
            path: 'profile',
            title: 'Profile',
            canActivate: [authGuardFn({ redirectTo: ['/login'] })],
            resolve: { layout: setLayout(PageLayout.Default) },
            loadComponent: () => import('./profile.page'),
        },
    }
}
