import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { BaseService } from './base.service'

export interface IUser {
    id: string
    username?: string
    firstName?: string
    lastName?: string
}

export class User implements IUser {
    id: string

    constructor(props: IUser) {
        Object.keys(props).forEach((prop) => {
            const value = props[prop]
            this[prop] = value
        })
        // OPTIONAL: If you are using a different primary key than "id" you can transform this here
        // this.id = props.id || props.key || props.MY_PRIMARY_KEY || ''
    }
}

@Injectable({
    providedIn: 'root',
})
export class UserService extends BaseService {
    constructor(protected http: HttpClient) {
        super(http, 'user')
    }
}
