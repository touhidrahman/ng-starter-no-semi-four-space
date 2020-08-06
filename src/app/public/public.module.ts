import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { routes } from './public.routes'
import { RouterModule } from '@angular/router'
import { HomePageComponent } from './pages/home-page/home-page.component'

@NgModule({
    declarations: [HomePageComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PublicModule {}
