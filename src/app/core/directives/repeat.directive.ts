import {
    Directive,
    Input,
    inject,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core'

@Directive({
    selector: '[appRepeat]',
    standalone: true,
})
export class RepeatDirective {
    private vcRef = inject(ViewContainerRef)
    private templateRef = inject<TemplateRef<unknown>>(TemplateRef)

    constructor() {
        this.vcRef.createEmbeddedView(this.templateRef, {})
    }

    @Input() set ngRepeat(amount: number) {
        this.vcRef.clear()
        for (let i = 0; i < amount; i++) {
            this.vcRef.createEmbeddedView(this.templateRef, {
                index: i,
            })
        }
    }
}
