import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common'
import {
    provideHttpClient,
    withInterceptors,
    withJsonpSupport,
    withXsrfConfiguration,
} from '@angular/common/http'
import { ApplicationConfig, importProvidersFrom } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
    PreloadAllModules,
    TitleStrategy,
    provideRouter,
    withComponentInputBinding,
    withInMemoryScrolling,
    withPreloading,
    withRouterConfig,
} from '@angular/router'
import { AuthHeaderInterceptorFn } from '@core/auth/interceptors/auth-header.interceptor'
import { serverErrorInterceptorFn } from '@core/interceptors/server-error.interceptor'
import { CustomTitleStrategy } from '@core/services/custom-title.service'
import { APP_ENVIRONMENT } from '@environment/app-environment.injector'
import { environment } from '@environment/environment'
import { HotToastModule } from '@ngneat/hot-toast'
import { AppRoutes } from './app.routes'

export const appConfig: ApplicationConfig = {
    providers: [
        { provide: APP_ENVIRONMENT, useValue: environment },
        { provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: { dateFormat: 'shortDate' } },
        { provide: TitleStrategy, useClass: CustomTitleStrategy },
        provideHttpClient(
            withXsrfConfiguration({}),
            withJsonpSupport(),
            withInterceptors([AuthHeaderInterceptorFn, serverErrorInterceptorFn]),
        ),
        provideRouter(
            AppRoutes,
            withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
            withRouterConfig({ onSameUrlNavigation: 'reload' }),
            withComponentInputBinding(),
            withPreloading(PreloadAllModules),
        ),
        importProvidersFrom(BrowserAnimationsModule),
        importProvidersFrom(HotToastModule.forRoot()),
    ],
}
