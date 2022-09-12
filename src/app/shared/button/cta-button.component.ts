import { CommonModule } from '@angular/common'
import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core'

@Component({
    imports: [CommonModule],
    standalone: true,
    // tslint:disable-next-line: component-selector
    selector: 'button[app-cta-button], a[app-cta-button]',
    template: `
        <span
            class="border-2 border-transparent bg-red-500 px-8 py-3 text-xl text-red-100
            transition duration-200 ease-in-out focus:outline-none hover:border-red-500
            hover:bg-transparent hover:text-gray-900"
        >
            <ng-content></ng-content>
        </span>
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class CtaButtonComponent {}
