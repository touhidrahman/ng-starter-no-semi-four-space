import { Component } from '@angular/core'
import { ButtonModule } from 'primeng/button'

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [ButtonModule],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export default class HomeComponent {}
