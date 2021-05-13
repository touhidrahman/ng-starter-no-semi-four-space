import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HomePageRoutingModule } from './home-page-routing.module'
import { HomePageComponent } from './home-page.component'

@NgModule({
    declarations: [HomePageComponent],
    imports: [CommonModule, HomePageRoutingModule],
})
export class HomePageModule {}
