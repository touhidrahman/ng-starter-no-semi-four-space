import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ArticleDetailsPageComponent } from './article-details-page/article-details-page.component'
import { ArticleListPageComponent } from './article-list-page/article-list-page.component'

const routes: Routes = [
    { path: '', component: ArticleListPageComponent },
    { path: ':id', component: ArticleDetailsPageComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ArticlePagesRoutingModule {}
