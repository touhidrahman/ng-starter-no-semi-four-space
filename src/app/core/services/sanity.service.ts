import { HttpClient } from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'
import { AppConfig, APP_CONFIG } from '@core/config/app-config'
import { WINDOW } from '@ng-web-apis/common'
import { map, Observable } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class SanityService {
    constructor(
        private http: HttpClient,
        @Inject(WINDOW) private wnd: Window,
        @Inject(APP_CONFIG) private appConfig: AppConfig,
    ) {}

    buildImageUrl(ref: string): string {
        const client = this.createClient()
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const imageUrlBuilder = require('@sanity/image-url')
        const builder = imageUrlBuilder(client)
        return builder.image(ref)?.url()
    }

    private fetch(query: string): Observable<any> {
        const url = `${this.generateSanityUrl()}${encodeURIComponent(query)}`
        return this.http.get(url).pipe(map((response: any) => response.result))
    }

    private createClient(): any {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const sanityClient = require('@sanity/client')

        const client = sanityClient({
            projectId: this.appConfig.sanity.projectId,
            dataset: this.appConfig.sanity.dataset,
            apiVersion: this.getApiVersion(),
            useCdn: false,
        })

        return client
    }

    private generateSanityUrl(): string {
        const config = {
            projectId: this.appConfig.sanity.projectId,
            dataset: this.appConfig.sanity.dataset,
            apiVersion: this.getApiVersion(),
        }

        let baseUrl = `${this.wnd.location.origin}/api/`
        if (
            this.wnd.location.href.startsWith(this.appConfig.web.url) ||
            this.wnd.location.href.startsWith('http://localhost:4200')
        ) {
            baseUrl = `https://${this.appConfig.sanity.projectId}.api.sanity.io/`
        }
        return `${baseUrl}${config.apiVersion}/data/query/${config.dataset}?query=`
    }

    private getApiVersion(): string {
        const currenDate = new Date()
        return `v${currenDate.toISOString().split('T')[0]}`
    }
}
