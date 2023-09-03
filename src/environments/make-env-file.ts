import { AppEnvironment } from './app-environment.interface'
import { writeFile } from 'fs'

/**
 * This script makes a prod environment file in angular project's environment dir
 */

const filename = 'src/environments/environment.prod.ts'

function getAppEnvironment(): AppEnvironment {
    return {
        appName: 'ng-no-semi-four-space',
        production: true,
        apiUrl: `${process.env['API_URL'] ?? 'http://localhost:3000'}`,
    }
}

function getContent(): string {
    return `export const environment = ${JSON.stringify(getAppEnvironment(), null, 4)}`
}

writeFile(filename, getContent(), function onCreate(err: unknown) {
    if (err) throw err
    console.warn('Running ./make-env-file.ts script to create angular environment file')
    console.info('#################### MAKE-ENV-FILE ####################')
    console.info(`${filename} created`)
    console.info('#######################################################')
})
