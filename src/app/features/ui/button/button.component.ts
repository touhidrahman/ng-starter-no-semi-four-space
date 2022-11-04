import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from '@angular/core'

@Component({
    imports: [CommonModule],
    standalone: true,
    selector: 'button[app-button], a[app-button], app-button',
    template: `
        <i *ngIf="loading" class="bx bx-loader-alt bx-spin"></i>
        <ng-content *ngIf="!loading" select="[button-icon], i"></ng-content>
        <ng-content></ng-content>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
    @Input() color: 'primary' | 'secondary' | 'accent' = 'primary'
    @Input() shape: 'round' | 'sharp' | 'default' = 'default'
    @Input() loading = false

    @HostBinding('attr.disabled')
    @Input()
    disabled = false

    @HostBinding('class')
    get klass() {
        const classes = 'font-medium h-14 px-8 text-lg focus:outline-none inline-flex items-center gap-2 leading-8'

        let color = ''
        if (this.color === 'primary') {
            color = 'bg-primary-700 text-primary-50 hover:bg-primary-800 hover:text-white'
        }
        if (this.color === 'secondary') {
            color = 'text-primary-600 hover:bg-primary-700 hover:text-white'
        }
        if (this.color === 'accent') {
            color = 'text-white bg-accent-500 hover:bg-accent-600 hover:text-white'
        }

        let disabled = 'cursor-pointer'
        if (this.disabled) {
            disabled = 'opacity-50 cursor-not-allowed'
        }

        let shape = 'rounded'
        if (this.shape === 'round') {
            shape = 'rounded-full'
        }
        if (this.shape === 'sharp') {
            shape = ''
        }
        return `${classes} ${color} ${disabled} ${shape}`
    }
}
