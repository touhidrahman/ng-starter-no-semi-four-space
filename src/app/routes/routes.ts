import { Routes } from '@angular/router'
import { authGuardFn } from '@core/auth/guards/auth.guard'
import { PageLayout } from '@features/layout/page-layout.enum'
import { setLayout } from '@features/layout/set-layout.resolver'

export const AppRoutes: Routes = [
    {
        path: '',
        title: 'Home',
        resolve: { layout: setLayout(PageLayout.Sidebar) },
        loadComponent: () => import('./home/home.page'),
    },
    {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full',
    },
    {
        path: 'login',
        title: 'Login',
        resolve: { layout: setLayout(PageLayout.Center) },
        loadComponent: () => import('./auth/login/login.page'),
    },
    {
        path: 'register',
        title: 'Register',
        resolve: { layout: setLayout(PageLayout.Center) },
        loadComponent: () => import('./auth/register/register.page'),
    },
    {
        path: 'verify-email/:token',
        title: 'Verify Email',
        resolve: { layout: setLayout(PageLayout.Center) },
        loadComponent: () => import('./auth/verify-email/verify-email.page'),
    },
    {
        path: 'forgot-password',
        title: 'Forgot Password',
        resolve: { layout: setLayout(PageLayout.Center) },
        loadComponent: () => import('./auth/forgot-password/forgot-password.page'),
    },
    {
        path: 'reset-password/:token',
        title: 'Reset Password',
        resolve: { layout: setLayout(PageLayout.Center) },
        loadComponent: () => import('./auth/reset-forgotten-password/reset-forgotten-password.page'),
    },
    {
        path: 'profile',
        title: 'Profile',
        canActivate: [authGuardFn({ redirectTo: ['/login'] })],
        resolve: { layout: setLayout(PageLayout.Default) },
        loadComponent: () => import('./profile/profile.page'),
    },
    {
        path: '**',
        title: '404',
        resolve: { layout: setLayout(PageLayout.Center) },
        loadComponent: () => import('./not-found/not-found.page'),
    },
]
