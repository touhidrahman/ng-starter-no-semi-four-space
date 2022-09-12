import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core'

@Component({
    imports: [CommonModule],
    standalone: true,
    // tslint:disable-next-line: component-selector
    selector: 'button[app-primary-button], a[app-primary-button]',
    template: `
        <span class="bg-red-600 py-2 px-4 text-lg text-red-100 focus:outline-none hover:bg-red-700">
            <ng-content></ng-content>
        </span>
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class PrimaryButtonComponent {}
