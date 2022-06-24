import { HttpClientModule } from '@angular/common/http'
import { enableProdMode, importProvidersFrom } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { RouterModule, TitleStrategy } from '@angular/router'
import { APP_CONFIG } from '@core/config/app-config'
import { CustomTitleStrategy } from '@core/config/app-title'
import { APP_TAILWIND_STYLES } from '@core/directives/tailwind.directive'
import { authInterceptorProvider } from '@core/interceptors/auth-header.interceptor'
import { unauthorizedInterceptorProvider } from '@core/interceptors/unauthorized.interceptor'
import { DEFAULT_TAILWIND_STYLES } from '@core/values/tailwind-styles'
import { routes } from './app/app-routing.module'
import { AppComponent } from './app/app.component'
import { environment } from './environments/environment'

if (environment.production) {
    enableProdMode()
}

bootstrapApplication(AppComponent, {
    providers: [
        { provide: APP_CONFIG, useValue: environment },
        importProvidersFrom(HttpClientModule),
        importProvidersFrom(RouterModule.forRoot(routes)),
        authInterceptorProvider,
        unauthorizedInterceptorProvider,
        { provide: TitleStrategy, useClass: CustomTitleStrategy },
        { provide: APP_TAILWIND_STYLES, useValue: DEFAULT_TAILWIND_STYLES },
    ],
}).catch((err) => console.error(err))
