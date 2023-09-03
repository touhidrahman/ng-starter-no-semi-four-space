import { Inject, Injectable } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { RouterStateSnapshot, TitleStrategy } from '@angular/router'
import { APP_ENVIRONMENT } from '@environment/app-environment.injector'
import { AppEnvironment } from '@environment/app-environment.interface'

@Injectable()
export class CustomTitleStrategy extends TitleStrategy {
    constructor(
        private readonly title: Title,
        @Inject(APP_ENVIRONMENT) private appEnvironment: AppEnvironment,
    ) {
        super()
    }

    override updateTitle(routerState: RouterStateSnapshot): void {
        const pageTitle = this.buildTitle(routerState)
        this.title.setTitle(
            pageTitle
                ? `${this.appEnvironment.appName} - ${pageTitle}`
                : this.appEnvironment.appName,
        )
    }
}
