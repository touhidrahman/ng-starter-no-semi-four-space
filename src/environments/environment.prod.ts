/**
 * If you are utilizing the make-env-file.ts script, then you need to take care of the following:
 * - This file will be replaced when you run `npm run make-env-file` or `npm run build:use-env`
 * - So make sure you change the `make-env-file.ts script` to reflect your environment configuration
 */

import { AppEnvironment } from './app-environment.interface'

export const environment: AppEnvironment = {
    appName: 'ng-starter-no-semi-four-space',
    production: true,
    apiUrl: '',
    authApiUrl: '',
    appwriteEndpoint:
        'http://appwrite-h80wokwcgwoksgcog40wkc4c.184.174.33.128.sslip.io/v1',
    appwriteProjectId: 'finance',
    appwriteProjectName: 'Personal Finance',
    appwriteApiKey:
        'standard_e69aa2b71fa0dd205bac4501f62b36fee3285971a8c373e29bf34e2995c45413a9456ce55b70a2ad3090f983e49415ec2cc5c7158f61b36b36e82161b0ad4cdba312097a4e271ebcf57b7bdd8cb6b071edd63bbd50e9ec1439686e5ef88e38e251b595502742251b51fb87d40843d8353809452d40d21e1299bd1ae8c10ebc32',
}
