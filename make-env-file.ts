import { AppConfig } from './src/app/core/config/app-config'
import { writeFile } from 'fs'

/**
 * This script makes a prod environment file in angular project's environment dir
 */

const filename = 'src/environments/environment.prod.ts'

function getConfig(): AppConfig {
    return {
        appName: 'ng-no-semi-four-space',
        production: true,
        apiUrl: `${process.env['API_URL'] ?? 'http://localhost:3000/v1'}`,
    }
}

function getContent(): string {
    return `export const environment = ${JSON.stringify(getConfig(), null, 4)}`
}

writeFile(filename, getContent(), function onCreate(err: any) {
    if (err) throw err
    console.warn('Running ./make-env-file.ts script to create angular environment file')
    console.info('#################### MAKE-ENV-FILE ####################')
    console.info(filename + ' created')
    console.info('#######################################################')
})
