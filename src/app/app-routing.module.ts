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
        path: 'articles',
        loadChildren: () => import('./pages/article-pages/article-pages.module').then((m) => m.ArticlePagesModule),
    },
    {
        path: 'settings',
        loadChildren: () => import('./pages/settings-page/settings-page.module').then((m) => m.SettingsPageModule),
    },
    {
        path: '**',
        loadChildren: () => import('./pages/error-pages/error-pages.module').then((m) => m.ErrorPagesModule),
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
