import { Directive, TemplateRef, ViewContainerRef } from '@angular/core'
import { AuthService } from '@core/auth/services/auth.service'

@Directive({
    standalone: true,
    selector: '[appIfAdmin]',
})
export class IfAdminDirective {
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private auth: AuthService,
    ) {
        if (this.auth.isAdmin) {
            this.viewContainer.createEmbeddedView(this.templateRef)
        } else {
            this.viewContainer.clear()
        }
    }
}
