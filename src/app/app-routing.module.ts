import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component'

const routes: Routes = [
    {
        path: '',
        component: AppComponent,
    },
    { path: 'home', loadChildren: () => import('./pages/home-page/home-page.module').then((m) => m.HomePageModule) },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
