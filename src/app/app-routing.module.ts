import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoggedInGuard } from '@core/guards/logged-in.guard'

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/home-page/home-page.module').then((m) => m.HomePageModule),
    },
    {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full',
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login-page/login-page.module').then((m) => m.LoginPageModule),
    },
    {
        path: 'register',
        loadChildren: () => import('./pages/register-page/register-page.module').then((m) => m.RegisterPageModule),
    },
    {
        path: 'verify-email/:token',
        loadChildren: () =>
            import('./pages/verify-email-page/verify-email-page.module').then((m) => m.VerifyEmailPageModule),
    },
    {
        path: 'forgot-password',
        loadChildren: () =>
            import('./pages/forgot-password-page/forgot-password-page.module').then((m) => m.ForgotPasswordPageModule),
    },
    {
        path: 'reset-password/:token',
        loadChildren: () =>
            import('./pages/reset-forgotten-password-page/reset-forgotten-password-page.module').then(
                (m) => m.ResetForgottenPasswordPageModule,
            ),
    },
    {
        path: 'profile',
        loadChildren: () => import('./pages/profile-page/profile-page.module').then((m) => m.ProfilePageModule),
        canActivate: [LoggedInGuard],
    },
    {
        path: '**',
        loadChildren: () => import('./pages/not-found-page/not-found-page.module').then((m) => m.NotFoundPageModule),
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
