import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

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
        path: '**',
        loadChildren: () => import('./pages/not-found-page/not-found-page.module').then((m) => m.NotFoundPageModule),
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
