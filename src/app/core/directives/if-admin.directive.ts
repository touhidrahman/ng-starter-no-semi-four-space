import { Directive, TemplateRef, ViewContainerRef } from '@angular/core'
import { AuthStateService } from '@main/auth/services/auth.service'

@Directive({
    standalone: true,
    selector: '[appIfAdmin]',
})
export class IfAdminDirective {
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private auth: AuthStateService,
    ) {
        if (this.auth.isAdmin()) {
            this.viewContainer.createEmbeddedView(this.templateRef)
        } else {
            this.viewContainer.clear()
        }
    }
}
