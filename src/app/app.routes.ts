import { Routes } from '@angular/router'
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component'

export const appRoutes: Routes = [
    { path: '404', component: PageNotFoundComponent },
    {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./public/public.module').then((m) => m.PublicModule),
    },
    {
        path: '**',
        redirectTo: '404',
    },
]
