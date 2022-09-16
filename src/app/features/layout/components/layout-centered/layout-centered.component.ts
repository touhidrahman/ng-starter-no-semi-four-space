import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
    selector: 'app-layout-centered',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './layout-centered.component.html',
    styleUrls: ['./layout-centered.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutCenteredComponent {}
