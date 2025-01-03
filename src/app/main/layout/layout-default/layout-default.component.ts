import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { HeaderOneComponent } from '@main/headers/header-one/header-one.component'

@Component({
    selector: 'app-layout-default',
    imports: [RouterModule, HeaderOneComponent],
    templateUrl: './layout-default.component.html',
    styleUrls: ['./layout-default.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutDefaultComponent {}
