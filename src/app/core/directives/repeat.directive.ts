import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core'

@Directive({
    selector: '[appRepeat]',
    standalone: true,
})
export class RepeatDirective {
    constructor(
        private vcRef: ViewContainerRef,
        private templateRef: TemplateRef<any>,
    ) {
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
