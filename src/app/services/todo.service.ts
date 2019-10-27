import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { BaseService } from './base.service'

export interface ITodo {
    id: number
    userId?: number
    title?: string
    completed?: boolean
}

export class Todo implements ITodo {
    id: number
    userId: number
    title: string
    completed: boolean

    constructor(props: ITodo) {
        Object.keys(props).forEach((prop) => {
            const value = props[prop]
            this[prop] = value
        })
    }
}

@Injectable({
    providedIn: 'root',
})
export class TodoService extends BaseService {
    constructor(protected http: HttpClient) {
        super(http, 'todos')
    }
}
