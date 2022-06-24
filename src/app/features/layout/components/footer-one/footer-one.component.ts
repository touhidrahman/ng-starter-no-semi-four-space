import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-footer-one',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './footer-one.component.html',
    styleUrls: ['./footer-one.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterOneComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
