import { InjectionToken } from '@angular/core'

export const AUTH_API_URL = new InjectionToken<string>('AUTH_API_URL')
export const ACCESS_TOKEN_KEY = new InjectionToken<string>('ACCESS_TOKEN_KEY')
export const REFRESH_TOKEN_KEY = new InjectionToken<string>('REFRESH_TOKEN_KEY')
