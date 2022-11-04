import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FooterOneComponent } from '@features/footers/footer-one/footer-one.component'
import { HeaderOneComponent } from '@features/headers/header-one/header-one.component'
import { ButtonComponent } from '@features/ui/button/button.component'
import { MaterialModules } from '@features/ui/material'

@Component({
    standalone: true,
    imports: [CommonModule, MaterialModules, ButtonComponent, HeaderOneComponent, FooterOneComponent],
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
    loading = false

    test() {
        console.log('TCL: ~ HERE ')
    }
}
