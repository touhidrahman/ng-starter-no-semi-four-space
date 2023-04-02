import { Routes } from '@angular/router'
import { authGuardFn } from '@core/auth/guards/auth.guard'
import { setLayout } from '@core/config/app-layout-resolver'
import { AppLayoutType } from '@core/models'

export const ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./home-page/home-page.component'),
        title: 'Home',
        resolve: { layout: setLayout(AppLayoutType.Default) },
    },
    {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full',
    },
    {
        path: 'login',
        resolve: { layout: setLayout(AppLayoutType.Center) },
        loadComponent: () => import('./auth/login-page/login-page.component'),
        title: 'Login',
    },
    {
        path: 'register',
        resolve: { layout: setLayout(AppLayoutType.Center) },
        loadComponent: () => import('./auth/register-page/register-page.component'),
        title: 'Register',
    },
    {
        path: 'verify-email/:token',
        title: 'Verify Email',
        resolve: { layout: setLayout(AppLayoutType.Center) },
        loadComponent: () => import('./auth/verify-email-page/verify-email-page.component'),
    },
    {
        path: 'forgot-password',
        title: 'Forgot Password',
        resolve: { layout: setLayout(AppLayoutType.Center) },
        loadComponent: () => import('./auth/forgot-password-page/forgot-password-page.component'),
    },
    {
        path: 'reset-password/:token',
        title: 'Reset Password',
        resolve: { layout: setLayout(AppLayoutType.Center) },
        loadComponent: () => import('./auth/reset-forgotten-password-page/reset-forgotten-password-page.component'),
    },
    {
        path: 'profile',
        resolve: { layout: setLayout(AppLayoutType.Default) },
        loadComponent: () => import('./profile-page/profile-page.component'),
        title: 'Profile',
        canActivate: [authGuardFn({ redirectTo: ['/login'] })],
    },
    {
        path: '**',
        resolve: { layout: setLayout(AppLayoutType.Center) },
        loadComponent: () => import('./not-found-page/not-found-page.component'),
        title: '404',
    },
]
