import { Directive, ElementRef, Input, Renderer2, inject } from '@angular/core'

@Directive({
    selector: '[appHide]',
    standalone: true,
})
export class HideDirective {
    protected elementRef = inject(ElementRef)
    protected renderer2 = inject(Renderer2)

    @Input() set ngHide(value: boolean) {
        value
            ? this.renderer2.setStyle(this.elementRef.nativeElement, 'visibility', 'hidden')
            : this.renderer2.removeStyle(this.elementRef.nativeElement, 'visibility')
    }
}
