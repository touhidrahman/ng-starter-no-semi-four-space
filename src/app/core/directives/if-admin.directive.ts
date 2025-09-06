import { Directive, inject, TemplateRef, ViewContainerRef } from '@angular/core'
import { AuthStateService } from '@main/auth/services/auth.service'

@Directive({
    standalone: true,
    selector: '[appIfAdmin]',
})
export class IfAdminDirective {
    private templateRef = inject<TemplateRef<unknown>>(TemplateRef)
    private viewContainer = inject(ViewContainerRef)
    private auth = inject(AuthStateService)

    constructor() {
        if (this.auth.isAdmin()) {
            this.viewContainer.createEmbeddedView(this.templateRef)
        } else {
            this.viewContainer.clear()
        }
    }
}
