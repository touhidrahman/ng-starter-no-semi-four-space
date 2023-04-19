import { Location } from '@angular/common'
import { Directive, HostListener } from '@angular/core'

@Directive({
    selector: '[appOnClickGoBack]',
    standalone: true,
})
export class OnClickGoBackDirective {
    @HostListener('click', ['$event']) onClick(e: MouseEvent) {
        e.preventDefault()
        e.stopPropagation()
        this.location.back()
    }

    constructor(public location: Location) {}
}
