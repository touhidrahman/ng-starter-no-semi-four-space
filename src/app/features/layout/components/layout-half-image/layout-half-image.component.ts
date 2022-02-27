import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
    selector: 'app-layout-half-image',
    templateUrl: './layout-half-image.component.html',
    styleUrls: ['./layout-half-image.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutHalfImageComponent {}
