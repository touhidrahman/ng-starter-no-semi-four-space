import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ArticlePagesRoutingModule } from './article-pages-routing.module'
import { ArticleDetailsPageComponent } from './article-details-page/article-details-page.component'
import { ArticleListPageComponent } from './article-list-page/article-list-page.component'

@NgModule({
    declarations: [ArticleDetailsPageComponent, ArticleListPageComponent],
    imports: [CommonModule, ArticlePagesRoutingModule],
})
export class ArticlePagesModule {}
