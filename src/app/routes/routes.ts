import { Routes } from '@angular/router'
import { authGuardFn } from '@core/auth/guards/auth.guard'
import { PageLayout } from '@features/layout/page-layout.enum'
import { setLayout } from '@features/layout/set-layout.resolver'

export const ROUTES: Routes = [
    {
        path: '',
        title: 'Home',
        resolve: { layout: setLayout(PageLayout.Sidebar) },
        loadComponent: () => import('./home-page/home-page.component'),
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
        loadComponent: () => import('./auth/login-page/login-page.component'),
    },
    {
        path: 'register',
        title: 'Register',
        resolve: { layout: setLayout(PageLayout.Center) },
        loadComponent: () => import('./auth/register-page/register-page.component'),
    },
    {
        path: 'verify-email/:token',
        title: 'Verify Email',
        resolve: { layout: setLayout(PageLayout.Center) },
        loadComponent: () => import('./auth/verify-email-page/verify-email-page.component'),
    },
    {
        path: 'forgot-password',
        title: 'Forgot Password',
        resolve: { layout: setLayout(PageLayout.Center) },
        loadComponent: () => import('./auth/forgot-password-page/forgot-password-page.component'),
    },
    {
        path: 'reset-password/:token',
        title: 'Reset Password',
        resolve: { layout: setLayout(PageLayout.Center) },
        loadComponent: () => import('./auth/reset-forgotten-password-page/reset-forgotten-password-page.component'),
    },
    {
        path: 'profile',
        title: 'Profile',
        canActivate: [authGuardFn({ redirectTo: ['/login'] })],
        resolve: { layout: setLayout(PageLayout.Default) },
        loadComponent: () => import('./profile-page/profile-page.component'),
    },
    {
        path: '**',
        title: '404',
        resolve: { layout: setLayout(PageLayout.Center) },
        loadComponent: () => import('./not-found-page/not-found-page.component'),
    },
]
