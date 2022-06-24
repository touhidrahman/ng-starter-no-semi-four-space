import { Routes } from '@angular/router'

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home-page/home-page.component').then((m) => m.HomePageComponent),
        title: 'Home',
    },
    {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full',
    },
    // {
    //     path: 'login',
    //     loadComponent: () => import('./pages/login-page/login-page.module').then((m) => m.LoginPageModule),
    //     title: '',
    // },
    // {
    //     path: 'register',
    //     loadComponent: () => import('./pages/register-page/register-page.module').then((m) => m.RegisterPageModule),
    //     title: '',
    // },
    // {
    //     path: 'verify-email/:token',
    //     title: '',
    //     loadComponent: () =>
    //         import('./pages/verify-email-page/verify-email-page.module').then((m) => m.VerifyEmailPageModule),
    // },
    // {
    //     path: 'forgot-password',
    //     title: '',
    //     loadComponent: () =>
    //         import('./pages/forgot-password-page/forgot-password-page.module').then((m) => m.ForgotPasswordPageModule),
    // },
    // {
    //     path: 'reset-password/:token',
    //     title: '',
    //     loadComponent: () =>
    //         import('./pages/reset-forgotten-password-page/reset-forgotten-password-page.module').then(
    //             (m) => m.ResetForgottenPasswordPageModule,
    //         ),
    // },
    // {
    //     path: 'profile',
    //     loadComponent: () => import('./pages/profile-page/profile-page.module').then((m) => m.ProfilePageModule),
    //     title: '',
    //     canActivate: [LoggedInGuard],
    // },
    // {
    //     path: '**',
    //     loadComponent: () => import('./pages/not-found-page/not-found-page.module').then((m) => m.NotFoundPageModule),
    //     title: '404',
    // },
]
