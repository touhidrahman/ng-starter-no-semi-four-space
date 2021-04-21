import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ArticleListPageComponent } from './article-list-page.component'

const routes: Routes = [{ path: '', component: ArticleListPageComponent }]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ArticleListPageRoutingModule {}
