import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-footer-one',
    templateUrl: './footer-one.component.html',
    styleUrls: ['./footer-one.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterOneComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
