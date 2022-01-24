import { HttpClient } from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'
import { AppConfig, APP_CONFIG } from '@core/config/app-config'
import { WINDOW } from '@ng-web-apis/common'
import sanityClient, { SanityClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { map, Observable } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class SanityService {
    private client: SanityClient

    constructor(
        private http: HttpClient,
        @Inject(WINDOW) private wnd: Window,
        @Inject(APP_CONFIG) private appConfig: AppConfig,
    ) {
        this.client = this.createClient()
    }

    buildImageUrl(source: SanityImageSource): string {
        const builder = imageUrlBuilder(this.client)
        return builder.image(source)?.url()
    }

    buildImage(source: SanityImageSource): ImageUrlBuilder {
        const builder = imageUrlBuilder(this.client)
        return builder.image(source)
    }

    fetch(query: string): Observable<any> {
        const url = `${this.generateSanityUrl()}${encodeURIComponent(query)}`
        return this.http.get(url).pipe(map((response: any) => response.result))
    }

    private createClient(): any {
        return sanityClient({
            projectId: this.appConfig.sanity.projectId,
            dataset: this.appConfig.sanity.dataset,
            apiVersion: this.getApiVersion(),
            useCdn: false,
        })
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
