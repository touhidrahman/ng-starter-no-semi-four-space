import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ErrorPagesRoutingModule } from './error-pages-routing.module'
import { NotFoundPageComponent } from './not-found-page/not-found-page.component'

@NgModule({
    declarations: [NotFoundPageComponent],
    imports: [CommonModule, ErrorPagesRoutingModule],
})
export class ErrorPagesModule {}
