import { Directive, Input, TemplateRef, ViewContainerRef, inject } from '@angular/core'

@Directive({
    selector: '[appLet]',
    standalone: true,
})
export class LetDirective {
    private vcRef = inject(ViewContainerRef)
    private templateRef = inject<TemplateRef<any>>(TemplateRef)

    context = {
        $implicit: null,
        ngLet: null,
    }

    constructor() {
        this.vcRef.createEmbeddedView(this.templateRef, this.context)
    }

    @Input() set ngLet(expression: any) {
        this.context.$implicit = this.context.ngLet = expression
    }
}
