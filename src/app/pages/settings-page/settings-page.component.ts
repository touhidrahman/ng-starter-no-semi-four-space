import { Observable } from 'rxjs'
import { Component, OnInit } from '@angular/core'
import { AuthService } from '@core/services/auth.service'
import { SeoService } from '@core/services/seo.service'
import { User } from '@features/users/interfaces/user'
import { UserService } from '@features/users/services/user.service'

@Component({
    selector: 'app-settings-page',
    templateUrl: './settings-page.component.html',
    styleUrls: ['./settings-page.component.scss'],
})
export class SettingsPageComponent implements OnInit {
    user$: Observable<User>

    constructor(private userService: UserService, private authService: AuthService, private seoService: SeoService) {}

    ngOnInit(): void {
        this.seoService.setSeoData('Profile', `Change password, view your WazDB profile`)
        this.user$ = this.userService.getMe()
    }
}
