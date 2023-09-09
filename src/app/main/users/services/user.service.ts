import { HttpClient } from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'
import { ApiService } from '@core/services/api.service'
import { APP_ENVIRONMENT } from '@environment/app-environment.injector'
import { AppEnvironment } from '@environment/app-environment.interface'
import { Observable } from 'rxjs'
import { User } from '../models/user.model'

@Injectable({
    providedIn: 'root',
})
export class UserService extends ApiService<User, unknown> {
    constructor(
        protected override http: HttpClient,
        @Inject(APP_ENVIRONMENT) appConfig: AppEnvironment,
    ) {
        super(http, 'v1/users', appConfig)
    }

    getMe(): Observable<User> {
        return this.http.get<User>(`${this.apiUrl}/me`)
    }
}
