import { Location } from '@angular/common'
import { Directive, HostListener, inject } from '@angular/core'

@Directive({
    selector: '[appOnClickGoBack]',
    standalone: true,
})
export class OnClickGoBackDirective {
    location = inject(Location)

    @HostListener('click', ['$event']) onClick(e: MouseEvent) {
        e.preventDefault()
        e.stopPropagation()
        this.location.back()
    }
}
