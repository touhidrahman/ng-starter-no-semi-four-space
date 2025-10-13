import { Route } from '@angular/router'
import {
    AccountsRoute,
    getAccountsRoutes,
} from '@pages/accounts/accounts.routes'
import { AuthRoutes, getAuthRoutes } from '@pages/auth/auth.routes'
import {
    DashboardRoutes,
    getDashboardRoutes,
} from '@pages/dashboard/dashboard.routes'
import { getHomeRoutes, HomeRoutes } from '@pages/home/home.routes'
import { getNotFoundPageRoutes } from '@pages/not-found/not-found.routes'
import { getProfileRoutes, ProfileRoutes } from '@pages/profile/profile.routes'
import { getReportsRoutes, ReportsRoute } from '@pages/reports/reports.routes'
import {
    getTransactionsRoute,
    TransactionsRoute,
} from '@pages/transactions/transactions.routes'

type GroupedRoutes = [
    HomeRoutes,
    AuthRoutes,
    ProfileRoutes,
    DashboardRoutes,
    AccountsRoute,
    TransactionsRoute,
    ReportsRoute,
]

const groupedRoutes: GroupedRoutes = [
    getHomeRoutes(),
    getAuthRoutes(),
    getProfileRoutes(),
    getDashboardRoutes(),
    getAccountsRoutes(),
    getTransactionsRoute(),
    getReportsRoutes(),
]

const flattenedRoutes: Route[] = []
for (const routeGroup of groupedRoutes) {
    for (const route of Object.values(routeGroup)) {
        flattenedRoutes.push(route)
    }
}
flattenedRoutes.push(getNotFoundPageRoutes().index)

export const AppRoutes = flattenedRoutes
