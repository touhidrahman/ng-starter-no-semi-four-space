import { InjectionToken } from '@angular/core'

export interface AppConfig {
    production: boolean
    apiUrl: string
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config')
