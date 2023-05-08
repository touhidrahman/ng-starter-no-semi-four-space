import { HttpClient } from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'
import { AppConfig, APP_CONFIG } from '@core/config/app-config'
import { User } from '@core/models'
import { ApiService } from '@core/services/api.service'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class UserService extends ApiService<User, unknown> {
    constructor(protected override http: HttpClient, @Inject(APP_CONFIG) appConfig: AppConfig) {
        super(http, 'v1/users', appConfig)
    }

    getMe(): Observable<User> {
        return this.http.get<User>(this.apiUrl + '/me')
    }
}
