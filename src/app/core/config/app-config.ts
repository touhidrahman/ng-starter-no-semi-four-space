import { InjectionToken, ValueProvider } from '@angular/core'

export interface AppConfig {
    production: boolean
    sanity: {
        projectId: string
        dataset: string
        useCdn: boolean
    }
    web: {
        url: string
    }
}

export const APP_CONFIG = new InjectionToken<AppConfig>('natokdb.config')

export const getAppConfigProvider = (value: AppConfig): ValueProvider => ({
    provide: APP_CONFIG,
    useValue: value,
})
