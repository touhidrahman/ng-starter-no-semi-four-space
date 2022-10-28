import { provideHttpClient, withInterceptors, withJsonpSupport, withXsrfConfiguration } from '@angular/common/http'
import { enableProdMode, importProvidersFrom } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { provideRouter, TitleStrategy, withInMemoryScrolling, withRouterConfig } from '@angular/router'
import { AuthHeaderInterceptorFn } from '@core/auth/interceptors/auth-header.interceptor'
import { APP_CONFIG } from '@core/config/app-config'
import { CustomTitleStrategy } from '@core/config/app-title'
import { AppComponent } from './app/app.component'
import { ROUTES } from './app/routes'
import { environment } from './environments/environment'

if (environment.production) {
    enableProdMode()
}

bootstrapApplication(AppComponent, {
    providers: [
        { provide: APP_CONFIG, useValue: environment },
        provideHttpClient(
            withXsrfConfiguration({}),
            withJsonpSupport(),
            withInterceptors([AuthHeaderInterceptorFn]),
        ),
        provideRouter(
            ROUTES,
            withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
            withRouterConfig({ onSameUrlNavigation: 'reload' }),
        ),
        importProvidersFrom(BrowserAnimationsModule),
        { provide: TitleStrategy, useClass: CustomTitleStrategy },
    ],
}).catch((err) => console.error(err))
