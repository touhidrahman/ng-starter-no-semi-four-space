import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
    providedIn: 'root',
})
export class BaseService {
    protected readonly API_URL: string = environment.apiURL
    protected SERVICE_URL: string

    constructor(protected http: HttpClient, protected resource: string) {
        this.SERVICE_URL = this.API_URL + '/' + resource
    }

    getMany<T>(query: Partial<T> = {}): Observable<T[]> {
        let params = new HttpParams()
        Object.keys(query).forEach((x) => {
            params = params.set(x, query[x])
        })
        return this.http.get<T[]>(this.SERVICE_URL, { params })
    }

    get<T>(id: number | string): Observable<T> {
        return this.http.get<T>(`${this.SERVICE_URL}/${id}`)
    }

    create<T>(entity: T): Observable<T> {
        return this.http.post<T>(this.SERVICE_URL, entity)
    }

    update<T>(id: number | string, entity: T): Observable<T> {
        return this.http.post<T>(`${this.SERVICE_URL}/${id}`, entity)
    }

    patch<T>(id: number | string, key: keyof T, value: any): Observable<T> {
        return this.http.patch<T>(`${this.SERVICE_URL}/${id}`, { [key]: value })
    }

    delete<T>(id: number | string): Observable<T> {
        return this.http.delete<T>(`${this.SERVICE_URL}/${id}`)
    }
}
