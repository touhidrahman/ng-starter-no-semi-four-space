import { AppConfig } from './src/app/core/config/app-config'
import { writeFile } from 'fs'

const filename = 'src/environments/environment.test.ts'

function getConfig(): AppConfig {
    return {
        production: true,
        apiUrl: `${process.env.API_URL ?? 'http://localhost:3000/v1'}`,
    }
}

function getContent(): string {
    return `export const environment = ${JSON.stringify(getConfig(), null, 4)}`
}

writeFile(filename, getContent(), function onCreate(err: any) {
    if (err) throw err
    console.info('#################### MAKE-ENV-FILE ####################')
    console.info(filename + ' created')
    console.info('#######################################################')
})
