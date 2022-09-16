import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { TokenSharingService } from '@core/auth/services/token-sharing.service'

@Component({
    standalone: true,
    selector: 'app-root',
    template: `<router-outlet></router-outlet>`,
    imports: [CommonModule, RouterModule],
})
export class AppComponent {
    constructor(private tokenSharingService: TokenSharingService) {
        this.tokenSharingService.init()
    }
}
