import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { DUIButton } from "david-ui-angular";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, DUIButton],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export default class HomeComponent {}
