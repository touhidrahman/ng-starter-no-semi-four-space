import { Route } from '@angular/router'
import { AuthRoutes, authRoutes } from '@pages/auth/auth.routes'
import { HomeRoutes, homeRoutes } from '@pages/home/home.routes'
import { NotFoundPageRoutes, notFoundPageRoutes } from '@pages/not-found/not-found.routes'
import { ProfileRoutes, profileRoutes } from '@pages/profile/profile.routes'

type GroupedRoutes = [
    HomeRoutes,
    AuthRoutes,
    ProfileRoutes,
    // catch-all route must be last
    NotFoundPageRoutes,
]

const groupedRoutes: GroupedRoutes = [homeRoutes, authRoutes, profileRoutes, notFoundPageRoutes]

const flattenedRoutes: Route[] = []
for (const routeGroup of groupedRoutes) {
    for (const route of Object.values(routeGroup)) {
        flattenedRoutes.push(route)
    }
}

export const AppRoutes = flattenedRoutes
