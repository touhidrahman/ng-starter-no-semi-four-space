import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArticlesModule } from '@features/articles/articles.module';
import { CommentsModule } from '@features/comments/comments.module';
import { ViewArticlePageRoutingModule } from './view-article-page-routing.module';
import { ViewArticlePageComponent } from './view-article-page.component';

@NgModule({
    declarations: [ViewArticlePageComponent],
    imports: [CommonModule, ArticlesModule, CommentsModule, ViewArticlePageRoutingModule],
})
export class ViewArticlePageModule {}
