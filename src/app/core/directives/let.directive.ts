import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core'

@Directive({
    selector: '[appLet]',
})
export class LetDirective {
    context = {
        $implicit: null,
        appLet: null,
    }

    constructor(private vcRef: ViewContainerRef, private templateRef: TemplateRef<any>) {
        this.vcRef.createEmbeddedView(this.templateRef, this.context)
    }

    @Input() set appLet(expression: any) {
        this.context.$implicit = this.context.appLet = expression
    }
}
