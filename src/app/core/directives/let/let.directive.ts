import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core'

@Directive({
    selector: '[appLet]',
})
export class LetDirective {
    context = {
        $implicit: null,
        c24Let: null,
    }

    constructor(private vcRef: ViewContainerRef, private templateRef: TemplateRef<any>) {
        this.vcRef.createEmbeddedView(this.templateRef, this.context)
    }

    @Input() set c24Let(expression: any) {
        this.context.$implicit = this.context.c24Let = expression
    }
}
