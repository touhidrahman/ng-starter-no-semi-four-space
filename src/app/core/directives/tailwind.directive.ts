import { Directive, HostBinding, Inject, Input } from '@angular/core'
import { InjectionToken } from '@angular/core'

export const APP_TAILWIND_STYLES = new InjectionToken<{ [k: string]: string }>('tailwind-styles')

/**
 * learn more: https://javascript.plainenglish.io/use-tailwindcss-via-directive-in-angular-6e4ec63e1c48
 */
@Directive({
    selector: '[tailwind]',
    standalone: true,
})
export class TailwindDirective {
    private twClasses = ''

    constructor(@Inject(APP_TAILWIND_STYLES) private stylesMap: { [k: string]: string }) {}

    @HostBinding('class')
    @Input()
    set tailwind(klasses: string) {
        this.twClasses = klasses
            .split(' ')
            .map((k) => this.stylesMap[k] ?? k)
            .join(' ')
    }
    get tailwind(): string {
        return this.twClasses
    }
}
