import { Routes } from '@angular/router'
import { authGuardFn } from '@core/auth/guards/auth.guard'
import { ProfileTitleResolver } from '@core/config/app-title'
import { AppLayoutType } from '@core/models'

export const ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./home-page/home-page.component'),
        title: 'Home',
        data: { layout: AppLayoutType.Default },
    },
    {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full',
    },
    {
        path: 'login',
        data: { layout: AppLayoutType.Center },
        loadComponent: () => import('./auth/login-page/login-page.component'),
        title: 'Login',
    },
    {
        path: 'register',
        data: { layout: AppLayoutType.Center },
        loadComponent: () => import('./auth/register-page/register-page.component'),
        title: 'Register',
    },
    {
        path: 'verify-email/:token',
        title: 'Verify Email',
        data: { layout: AppLayoutType.Center },
        loadComponent: () => import('./auth/verify-email-page/verify-email-page.component'),
    },
    {
        path: 'forgot-password',
        title: 'Forgot Password',
        data: { layout: AppLayoutType.Center },
        loadComponent: () => import('./auth/forgot-password-page/forgot-password-page.component'),
    },
    {
        path: 'reset-password/:token',
        title: 'Reset Password',
        data: { layout: AppLayoutType.Center },
        loadComponent: () => import('./auth/reset-forgotten-password-page/reset-forgotten-password-page.component'),
    },
    {
        path: 'profile',
        data: { layout: AppLayoutType.Default },
        loadComponent: () => import('./profile-page/profile-page.component'),
        title: ProfileTitleResolver,
        canActivate: [authGuardFn({ redirectTo: ['/login'] })],
    },
    {
        path: '**',
        data: { layout: AppLayoutType.Center },
        loadComponent: () => import('./not-found-page/not-found-page.component'),
        title: '404',
    },
]
