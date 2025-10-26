import { Route } from '@angular/router'
import { AccountRoutes, getAccountRoutes } from '@pages/accounts/account.routes'
import { AuthRoutes, getAuthRoutes } from '@pages/auth/auth.routes'
import { getHomeRoutes, HomeRoutes } from '@pages/home/home.routes'
import { getNotFoundPageRoutes } from '@pages/not-found/not-found.routes'
import { getProfileRoutes, ProfileRoutes } from '@pages/profile/profile.routes'

type GroupedRoutes = [HomeRoutes, AuthRoutes, ProfileRoutes, AccountRoutes]

const groupedRoutes: GroupedRoutes = [
    getHomeRoutes(),
    getAuthRoutes(),
    getProfileRoutes(),
    getAccountRoutes(),
]

const flattenedRoutes: Route[] = []
for (const routeGroup of groupedRoutes) {
    for (const route of Object.values(routeGroup)) {
        flattenedRoutes.push(route)
    }
}
flattenedRoutes.push(getNotFoundPageRoutes().index)

export const AppRoutes = flattenedRoutes
