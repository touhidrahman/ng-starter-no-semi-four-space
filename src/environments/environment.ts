import { AppEnvironment } from './app-environment.interface'

export const environment: AppEnvironment = {
    appName: 'ng-starter-no-semi-four-space',
    production: false,
    apiUrl: 'http://localhost:3000',
    authApiUrl: 'http://localhost:3000/v1/auth',
    appwriteEndpoint:
        'http://appwrite-h80wokwcgwoksgcog40wkc4c.184.174.33.128.sslip.io/v1',
    appwriteProjectId: 'finance',
    appwriteProjectName: 'Personal Finance',
}
