import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
    standalone: true,
    imports: [RouterModule],
    selector: 'app-layout-half-image',
    templateUrl: './layout-half-image.component.html',
    styleUrls: ['./layout-half-image.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutHalfImageComponent {}
