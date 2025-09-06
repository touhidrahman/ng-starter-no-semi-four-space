import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common'
import {
    provideHttpClient,
    withFetch,
    withInterceptors,
    withJsonpSupport,
    withXsrfConfiguration,
} from '@angular/common/http'
import {
    type ApplicationConfig,
    importProvidersFrom,
    provideZonelessChangeDetection,
} from '@angular/core'
import {
    PreloadAllModules,
    provideRouter,
    TitleStrategy,
    withComponentInputBinding,
    withInMemoryScrolling,
    withPreloading,
    withRouterConfig,
} from '@angular/router'
import { JwtModule } from '@auth0/angular-jwt'
import { serverErrorInterceptorFn } from '@core/interceptors/server-error.interceptor'
import { CustomTitleStrategy } from '@core/services/custom-title.service'
import { APP_ENVIRONMENT } from '@environment/app-environment.injector'
import { environment } from '@environment/environment'
import {
    ACCESS_TOKEN_KEY,
    AUTH_API_URL,
    REFRESH_TOKEN_KEY,
} from '@main/auth/auth-injectors'
import { AuthHeaderInterceptorFn } from '@main/auth/interceptors/auth-header.interceptor'
import { provideNgIconsConfig } from '@ng-icons/core'
import { providePrimeNG } from 'primeng/config'
import { AppRoutes } from './app.routes'
import { MyPrimeNGConfig } from './primeng.config'

export const appConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom(JwtModule),
        { provide: APP_ENVIRONMENT, useValue: environment },
        { provide: AUTH_API_URL, useValue: environment.authApiUrl },
        { provide: ACCESS_TOKEN_KEY, useValue: 'accesstoken' },
        { provide: REFRESH_TOKEN_KEY, useValue: 'refreshtoken' },
        {
            provide: DATE_PIPE_DEFAULT_OPTIONS,
            useValue: { dateFormat: 'shortDate' },
        },
        { provide: TitleStrategy, useClass: CustomTitleStrategy },
        provideZonelessChangeDetection(),
        provideHttpClient(
            withFetch(),
            withXsrfConfiguration({}),
            withJsonpSupport(),
            withInterceptors([
                AuthHeaderInterceptorFn,
                serverErrorInterceptorFn,
            ]),
        ),
        provideRouter(
            AppRoutes,
            withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
            withRouterConfig({ onSameUrlNavigation: 'reload' }),
            withComponentInputBinding(),
            withPreloading(PreloadAllModules),
        ),
        providePrimeNG(MyPrimeNGConfig),
        provideNgIconsConfig({
            size: '1.5rem',
            color: 'currentColor',
        }),
    ],
}
