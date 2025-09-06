import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { ApiService } from '@core/services/api.service'
import { APP_ENVIRONMENT } from '@environment/app-environment.injector'
import { Observable } from 'rxjs'
import { User } from '../models/user.model'

@Injectable({
    providedIn: 'root',
})
export class UserService extends ApiService<User, unknown> {
    protected override http: HttpClient

    constructor() {
        const http = inject(HttpClient)
        const appConfig = inject(APP_ENVIRONMENT)

        super(http, 'v1/users', appConfig)

        this.http = http
    }

    getMe(): Observable<User> {
        return this.http.get<User>(`${this.apiUrl}/me`)
    }
}
