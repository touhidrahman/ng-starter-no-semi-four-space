import { InjectionToken, ValueProvider } from '@angular/core'

export interface AppConfig {
    production: boolean
    apiURL: string
}

export const APP_CONFIG = new InjectionToken<AppConfig>('natokdb.config')

export const getAppConfigProvider = (value: AppConfig): ValueProvider => ({
    provide: APP_CONFIG,
    useValue: value,
})
