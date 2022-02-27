import { NgModule } from '@angular/core'
import { CoreModule } from '@core/core.module'
import { FooterOneComponent } from './components/footer-one/footer-one.component'
import { HeaderNavigationsComponent } from './components/header-navigations/header-navigations.component'
import { HeaderOneComponent } from './components/header-one/header-one.component'
import { LayoutHalfImageComponent } from './components/layout-half-image/layout-half-image.component'

@NgModule({
    declarations: [FooterOneComponent, HeaderNavigationsComponent, HeaderOneComponent, LayoutHalfImageComponent],
    exports: [FooterOneComponent, HeaderNavigationsComponent, HeaderOneComponent, LayoutHalfImageComponent],
    imports: [CoreModule],
})
export class LayoutModule {}
