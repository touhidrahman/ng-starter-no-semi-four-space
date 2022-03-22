import { HttpClient } from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'
import { AppConfig, APP_CONFIG } from '@core/config/app-config'
import { Asset } from '@core/interfaces'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class AssetService {
    private apiUrl: string

    constructor(private http: HttpClient, @Inject(APP_CONFIG) appConfig: AppConfig) {
        this.apiUrl = appConfig.apiUrl + '/assets'
    }

    findByName(name: string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/${name}`)
    }

    uploadSingle(file: File): Observable<Asset> {
        const formData = new FormData()
        formData.append('file', file, file.name)
        return this.http.post<Asset>(this.apiUrl, formData)
    }

    uploadMultiple(files: File[]): Observable<Asset> {
        const formData = new FormData()
        // TODO check whether all files are uploaded or just one
        files.forEach((file) => {
            formData.append('files', file, file.name)
        })
        return this.http.post<Asset>(this.apiUrl, formData)
    }

    delete(name: string): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${name}`)
    }
}
