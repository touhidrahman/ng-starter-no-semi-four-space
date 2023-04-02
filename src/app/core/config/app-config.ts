import { InjectionToken } from '@angular/core'

export interface AppConfig {
    appName: string
    production: boolean
    apiUrl: string
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config')
