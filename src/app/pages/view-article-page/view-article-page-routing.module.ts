import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ViewArticlePageComponent } from './view-article-page.component'

const routes: Routes = [{ path: '', component: ViewArticlePageComponent }]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ViewArticlePageRoutingModule {}
