import { Inject, Injectable } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { RouterStateSnapshot, TitleStrategy } from '@angular/router'
import { APP_CONFIG, AppConfig } from './app-config'

@Injectable()
export class CustomTitleStrategy extends TitleStrategy {
    constructor(private readonly title: Title, @Inject(APP_CONFIG) private appConfig: AppConfig) {
        super()
    }

    override updateTitle(routerState: RouterStateSnapshot): void {
        const pageTitle = this.buildTitle(routerState)
        this.title.setTitle(pageTitle ? `${this.appConfig.appName} - ${pageTitle}` : this.appConfig.appName)
    }
}
