import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common'
import { provideHttpClient, withInterceptors, withJsonpSupport, withXsrfConfiguration } from '@angular/common/http'
import { importProvidersFrom } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { provideRouter, TitleStrategy, withInMemoryScrolling, withRouterConfig } from '@angular/router'
import { AuthHeaderInterceptorFn } from '@core/auth/interceptors/auth-header.interceptor'
import { APP_CONFIG } from '@core/config/app-config'
import { CustomTitleStrategy } from '@core/config/app-title'
import { AppComponent } from './app/app.component'
import { ROUTES } from './app/routes'
import { environment } from './environments/environment'

bootstrapApplication(AppComponent, {
    providers: [
        { provide: APP_CONFIG, useValue: environment },
        { provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: { dateFormat: 'shortDate' } },
        { provide: TitleStrategy, useClass: CustomTitleStrategy },
        provideHttpClient(withXsrfConfiguration({}), withJsonpSupport(), withInterceptors([AuthHeaderInterceptorFn])),
        provideRouter(
            ROUTES,
            withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
            withRouterConfig({ onSameUrlNavigation: 'reload' }),
        ),
        importProvidersFrom(BrowserAnimationsModule),
    ],
}).catch((err: any) => console.error(err))
