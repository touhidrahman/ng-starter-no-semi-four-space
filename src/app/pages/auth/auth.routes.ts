import { Route } from '@angular/router'
import { PageLayout } from '@main/layout/page-layout.enum'
import { setLayout } from '@main/layout/set-layout.resolver'

export type AuthRoutes = {
    login: Route
    register: Route
    verifyEmail: Route
    forgotPassword: Route
    resetPassword: Route
}

export function getAuthRoutes(): AuthRoutes {
    return {
        login: {
            path: 'login',
            title: 'Login',
            resolve: { layout: setLayout(PageLayout.Center) },
            loadComponent: () => import('./login/login.page'),
        },
        register: {
            path: 'register',
            title: 'Register',
            resolve: { layout: setLayout(PageLayout.Center) },
            loadComponent: () => import('./register/register.page'),
        },
        verifyEmail: {
            path: 'verify-email/:token',
            title: 'Verify Email',
            resolve: { layout: setLayout(PageLayout.Center) },
            loadComponent: () => import('./verify-email/verify-email.page'),
        },
        forgotPassword: {
            path: 'forgot-password',
            title: 'Forgot Password',
            resolve: { layout: setLayout(PageLayout.Center) },
            loadComponent: () => import('./forgot-password/forgot-password.page'),
        },
        resetPassword: {
            path: 'reset-password/:token',
            title: 'Reset Password',
            resolve: { layout: setLayout(PageLayout.Center) },
            loadComponent: () => import('./reset-forgotten-password/reset-forgotten-password.page'),
        },
    }
}
