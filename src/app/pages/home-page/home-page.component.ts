import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ButtonComponent } from '@features/ui/button/button.component'
import { MaterialModules } from '@features/ui/material'

@Component({
    standalone: true,
    imports: [CommonModule, MaterialModules, RouterModule, ButtonComponent],
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
    loading = false

    test() {
        console.log('TCL: ~ HERE ')
    }
}
