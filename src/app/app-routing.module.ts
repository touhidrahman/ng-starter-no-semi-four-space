import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'

const routes: Routes = [
    { path: '404', component: PageNotFoundComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
    },
    {
        path: '**',
        redirectTo: '404',
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
