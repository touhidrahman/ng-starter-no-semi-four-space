import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'
import { APP_CONFIG } from '@core/config/app-config'
import { APP_TAILWIND_STYLES } from '@core/directives/tailwind.directive'
import { authInterceptorProvider } from '@core/interceptors/auth-header.interceptor'
import { unauthorizedInterceptorProvider } from '@core/interceptors/unauthorized.interceptor'
import { environment } from '@environment/environment'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DEFAULT_TAILWIND_STYLES } from './core/values/tailwind-styles'

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserAnimationsModule, BrowserModule, RouterModule, HttpClientModule, AppRoutingModule],
    bootstrap: [AppComponent],
    providers: [
        { provide: APP_CONFIG, useValue: environment },
        authInterceptorProvider,
        unauthorizedInterceptorProvider,
        { provide: APP_TAILWIND_STYLES, useValue: DEFAULT_TAILWIND_STYLES },
    ],
})
export class AppModule {}
