import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ArticleDetailsPageComponent } from './article-details-page.component'

const routes: Routes = [{ path: '', component: ArticleDetailsPageComponent }]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ArticleDetailsPageRoutingModule {}
