import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ButtonComponent } from '@features/ui/button/button.component'
import { MaterialModules } from '@features/ui/material'
import { NavbarComponent } from '@features/ui/navbar/navbar.component'

@Component({
    standalone: true,
    imports: [CommonModule, MaterialModules, ButtonComponent, NavbarComponent],
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
    loading = false

    test() {
        console.log('TCL: ~ HERE ')
    }
}
