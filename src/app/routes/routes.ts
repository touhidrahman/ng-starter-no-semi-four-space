import { Route } from '@angular/router'
import { AuthRoutes, getAuthRoutes } from './auth/auth.routes'
import { HomeRoutes, getHomeRoutes } from './home/home.routes'
import { NotFoundPageRoutes, getNotFoundPageRoutes } from './not-found/not-found.routes'
import { ProfileRoutes, getProfileRoutes } from './profile/profile.routes'

type GroupedRoutes = [
    HomeRoutes,
    AuthRoutes,
    ProfileRoutes,
    // catch-all route must be last
    NotFoundPageRoutes,
]

const groupedRoutes: GroupedRoutes = [getHomeRoutes(), getAuthRoutes(), getProfileRoutes(), getNotFoundPageRoutes()]

const flattenedRoutes: Route[] = []
groupedRoutes.forEach((routeGroup) => {
    Object.values(routeGroup).forEach((route) => flattenedRoutes.push(route))
})

export const AppRoutes = flattenedRoutes
