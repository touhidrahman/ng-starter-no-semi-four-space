import { NgModule } from '@angular/core'
import { CoreModule } from '@core/core.module'
import { ArticlesModule } from '@features/articles/articles.module'
import { CommentsModule } from '@features/comments/comments.module'
import { ViewArticlePageRoutingModule } from './view-article-page-routing.module'
import { ViewArticlePageComponent } from './view-article-page.component'

@NgModule({
    declarations: [ViewArticlePageComponent],
    imports: [CoreModule, ArticlesModule, CommentsModule, ViewArticlePageRoutingModule],
})
export class ViewArticlePageModule {}
