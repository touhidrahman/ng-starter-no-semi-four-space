import { readFile, writeFile } from 'node:fs'
import path from 'node:path'
import { AppEnvironment } from './app-environment.interface'

/**
 * This script makes a prod environment file in angular project's environment dir
 */

const directoryPath = './src/environments'
const fileName = 'environment.prod.ts'
const filePath = path.join(directoryPath, fileName)

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

// Read the file
readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err.message)
    } else {
        console.warn('Running ./make-env-file.ts script to create angular environment file')
        console.info('Existing File content:\n', data)
    }
})

setTimeout(() => {
    writeFile(filePath, getContent(), function onCreate(err: unknown) {
        if (err) throw err
        console.info('#################### MAKE-ENV-FILE ####################')
        console.info(`${filePath} created`)
        console.info('File content:')
        console.info(getContent())
        console.info('#######################################################')
    })
}, 100)
