import { Routes } from '@angular/router'
import { authGuardFn } from '@core/auth/guards/auth.guard'
import { setLayout } from '@core/config/app-layout.resolver'
import { AppLayoutType } from '@core/models'

export const ROUTES: Routes = [
    {
        path: '',
        title: 'Home',
        resolve: { layout: setLayout(AppLayoutType.Default) },
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
        resolve: { layout: setLayout(AppLayoutType.Blank) },
        loadComponent: () => import('./auth/login-page/login-page.component'),
    },
    {
        path: 'register',
        title: 'Register',
        resolve: { layout: setLayout(AppLayoutType.Center) },
        loadComponent: () => import('./auth/register-page/register-page.component'),
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
        title: 'Profile',
        canActivate: [authGuardFn({ redirectTo: ['/login'] })],
        resolve: { layout: setLayout(AppLayoutType.Default) },
        loadComponent: () => import('./profile-page/profile-page.component'),
    },
    {
        path: '**',
        title: '404',
        resolve: { layout: setLayout(AppLayoutType.Center) },
        loadComponent: () => import('./not-found-page/not-found-page.component'),
    },
]
