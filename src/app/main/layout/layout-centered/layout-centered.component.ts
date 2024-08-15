import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
    selector: 'app-layout-centered',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './layout-centered.component.html',
    styleUrls: ['./layout-centered.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutCenteredComponent {}
