import { InjectionToken } from '@angular/core'
import { AppEnvironment } from './app-environment.interface'

export const APP_ENVIRONMENT = new InjectionToken<AppEnvironment>('app.environment')
