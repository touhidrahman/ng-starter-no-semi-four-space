import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
    providedIn: 'root',
})
export class BaseService {
    private API_URL: string = environment.apiURL
    protected SERVICE_URL: string = this.API_URL

    constructor(protected http: HttpClient) {}

    protected getAll<T>(): Observable<T[]> {
        return this.http.get<T[]>(this.SERVICE_URL)
    }

    protected get<T>(id: number): Observable<T> {
        return this.http.get<T>(`${this.SERVICE_URL}/${id}`)
    }

    protected create<T>(entity: T): Observable<T> {
        return this.http.post<T>(this.SERVICE_URL, entity)
    }

    protected update<T>(id: number, entity: T): Observable<T> {
        return this.http.post<T>(`${this.SERVICE_URL}/${id}`, entity)
    }

    protected delete<T>(id: number): Observable<T> {
        return this.http.delete<T>(`${this.SERVICE_URL}/${id}`)
    }
}
