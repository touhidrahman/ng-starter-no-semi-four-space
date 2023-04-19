import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common'
import { provideHttpClient, withInterceptors, withJsonpSupport, withXsrfConfiguration } from '@angular/common/http'
import { importProvidersFrom } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PreloadAllModules, TitleStrategy, provideRouter, withComponentInputBinding, withInMemoryScrolling, withPreloading, withRouterConfig } from '@angular/router'
import { AuthHeaderInterceptorFn } from '@core/auth/interceptors/auth-header.interceptor'
import { APP_CONFIG } from '@core/config/app-config'
import { CustomTitleStrategy } from '@core/config/custom-title.service'
import { AppComponent } from './app/app.component'
import { ROUTES } from './app/routes/routes'
import { environment } from './environments/environment'
import { HotToastModule } from '@ngneat/hot-toast'
import { serverErrorInterceptorFn } from '@core/interceptors/server-error.interceptor'

bootstrapApplication(AppComponent, {
    providers: [
        { provide: APP_CONFIG, useValue: environment },
        { provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: { dateFormat: 'shortDate' } },
        { provide: TitleStrategy, useClass: CustomTitleStrategy },
        provideHttpClient(
            withXsrfConfiguration({}),
            withJsonpSupport(),
            withInterceptors([AuthHeaderInterceptorFn, serverErrorInterceptorFn]),
        ),
        provideRouter(
            ROUTES,
            withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
            withRouterConfig({ onSameUrlNavigation: 'reload' }),
            withComponentInputBinding(),
            withPreloading(PreloadAllModules),
        ),
        importProvidersFrom(BrowserAnimationsModule),
        importProvidersFrom(HotToastModule.forRoot()),
    ],
}).catch((err: any) => console.error(err))
