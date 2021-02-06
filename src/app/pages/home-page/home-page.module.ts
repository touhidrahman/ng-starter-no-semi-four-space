import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ArticlesModule } from '@features/articles/articles.module'
import { CommentsModule } from '@features/comments/comments.module'
import { HomePageRoutingModule } from './home-page-routing.module'
import { HomePageComponent } from './home-page.component'

@NgModule({
    declarations: [HomePageComponent],
    imports: [CommonModule, ArticlesModule, CommentsModule, HomePageRoutingModule],
})
export class HomePageModule {}