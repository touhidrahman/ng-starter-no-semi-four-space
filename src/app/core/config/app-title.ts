import { Injectable } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { RouterStateSnapshot, TitleStrategy } from '@angular/router'

@Injectable({ providedIn: 'root' })
export class ProfileTitleResolver {
    resolve() {
        return Promise.resolve('My Profile')
    }
}

const AppName = 'ng-starter-no-semi-four-space'

@Injectable()
export class CustomTitleStrategy extends TitleStrategy {
    constructor(private readonly title: Title) {
        super()
    }

    override updateTitle(routerState: RouterStateSnapshot): void {
        const pageTitle = this.buildTitle(routerState)
        this.title.setTitle(pageTitle ? `${AppName} - ${pageTitle}` : AppName)
    }
}
