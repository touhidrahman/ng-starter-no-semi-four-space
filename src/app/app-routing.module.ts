import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/home-page/home-page.module').then((m) => m.HomePageModule),
    },
    {
        path: 'articles/:id',
        loadChildren: () =>
            import('./pages/view-article-page/view-article-page.module').then((m) => m.ViewArticlePageModule),
    },
    {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full',
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
