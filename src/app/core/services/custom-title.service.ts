import { Injectable, inject } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { RouterStateSnapshot, TitleStrategy } from '@angular/router'
import { APP_ENVIRONMENT } from '@environment/app-environment.injector'
import { AppEnvironment } from '@environment/app-environment.interface'

@Injectable()
export class CustomTitleStrategy extends TitleStrategy {
    private readonly title = inject(Title)
    private appEnvironment = inject(APP_ENVIRONMENT)

    override updateTitle(routerState: RouterStateSnapshot): void {
        const pageTitle = this.buildTitle(routerState)
        this.title.setTitle(
            pageTitle
                ? `${this.appEnvironment.appName} - ${pageTitle}`
                : this.appEnvironment.appName,
        )
    }
}
