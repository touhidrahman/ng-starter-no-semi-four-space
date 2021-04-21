import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ArticleListPageRoutingModule } from './article-list-page-routing.module'
import { ArticleListPageComponent } from './article-list-page.component'

@NgModule({
    declarations: [ArticleListPageComponent],
    imports: [CommonModule, ArticleListPageRoutingModule],
})
export class ArticleListPageModule {}
