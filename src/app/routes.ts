import { Routes } from '@angular/router'
import { ProfileTitleResolver } from '@core/config/app-title'
import { LoggedInGuard } from '@core/auth/guards/logged-in.guard'
import { AppLayoutType } from '@core/models'

export const ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home-page/home-page.component').then((m) => m.HomePageComponent),
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
        loadComponent: () => import('./pages/auth/login-page/login-page.component').then((m) => m.LoginPageComponent),
        title: 'Login',
    },
    {
        path: 'register',
        data: { layout: AppLayoutType.Center },
        loadComponent: () =>
            import('./pages/auth/register-page/register-page.component').then((m) => m.RegisterPageComponent),
        title: 'Register',
    },
    {
        path: 'verify-email/:token',
        title: 'Verify Email',
        data: { layout: AppLayoutType.Center },
        loadComponent: () =>
            import('./pages/auth/verify-email-page/verify-email-page.component').then(
                (m) => m.VerifyEmailPageComponent,
            ),
    },
    {
        path: 'forgot-password',
        title: 'Forgot Password',
        data: { layout: AppLayoutType.Center },
        loadComponent: () =>
            import('./pages/auth/forgot-password-page/forgot-password-page.component').then(
                (m) => m.ForgotPasswordPageComponent,
            ),
    },
    {
        path: 'reset-password/:token',
        title: 'Reset Password',
        data: { layout: AppLayoutType.Center },
        loadComponent: () =>
            import('./pages/auth/reset-forgotten-password-page/reset-forgotten-password-page.component').then(
                (m) => m.ResetForgottenPasswordPageComponent,
            ),
    },
    {
        path: 'profile',
        data: { layout: AppLayoutType.Default },
        loadComponent: () => import('./pages/profile-page/profile-page.component').then((m) => m.ProfilePageComponent),
        title: ProfileTitleResolver,
        canActivate: [LoggedInGuard],
    },
    {
        path: '**',
        data: { layout: AppLayoutType.Center },
        loadComponent: () =>
            import('./pages/not-found-page/not-found-page.component').then((m) => m.NotFoundPageComponent),
        title: '404',
    },
]
