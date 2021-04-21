import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ArticleDetailsPageRoutingModule } from './article-details-page-routing.module'
import { ArticleDetailsPageComponent } from './article-details-page.component'

@NgModule({
    declarations: [ArticleDetailsPageComponent],
    imports: [CommonModule, ArticleDetailsPageRoutingModule],
})
export class ArticleDetailsPageModule {}
