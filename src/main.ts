import { HttpClientModule } from '@angular/common/http'
import { enableProdMode, importProvidersFrom } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { RouterModule, TitleStrategy } from '@angular/router'
import { APP_CONFIG } from '@core/config/app-config'
import { CustomTitleStrategy } from '@core/config/app-title'
import { authInterceptorProvider } from '@core/interceptors/auth-header.interceptor'
import { AppComponent } from './app/app.component'
import { routes } from './app/routes'
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
        // unauthorizedInterceptorProvider, // TODO
        { provide: TitleStrategy, useClass: CustomTitleStrategy },
    ],
}).catch((err) => console.error(err))
