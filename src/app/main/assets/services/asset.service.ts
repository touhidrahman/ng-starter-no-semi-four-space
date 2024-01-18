import { HttpClient } from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'
import { APP_ENVIRONMENT } from '@environment/app-environment.injector'
import { AppEnvironment } from '@environment/app-environment.interface'
import { Observable } from 'rxjs'
import { Asset } from '../models/asset.model'

@Injectable({
    providedIn: 'root',
})
export class AssetService {
    private apiUrl: string

    constructor(
        private http: HttpClient,
        @Inject(APP_ENVIRONMENT) appEnvironment: AppEnvironment,
    ) {
        this.apiUrl = `${appEnvironment.apiUrl}v1/assets`
    }

    findByName(name: string): Observable<unknown> {
        return this.http.get<unknown>(`${this.apiUrl}/${name}`)
    }

    uploadSingle(file: File): Observable<Asset> {
        const formData = new FormData()
        formData.append('file', file, file.name)
        return this.http.post<Asset>(this.apiUrl, formData)
    }

    uploadMultiple(files: File[]): Observable<Asset> {
        const formData = new FormData()
        // biome-ignore lint/complexity/noForEach: <explanation>
        files.forEach((file) => {
            formData.append('files', file, file.name)
        })
        return this.http.post<Asset>(this.apiUrl, formData)
    }

    delete(name: string): Observable<unknown> {
        return this.http.delete(`${this.apiUrl}/${name}`)
    }
}
