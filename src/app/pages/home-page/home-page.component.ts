import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { MaterialModules } from '@core/material/material'

@Component({
    standalone: true,
    imports: [CommonModule, MaterialModules],
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {}
