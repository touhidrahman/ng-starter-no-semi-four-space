import { Injectable } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

const bannedQueryParams = ['fbclid']

@Injectable({
    providedIn: 'root',
})
export class QueryParamService {
    queryParams$: Observable<Params>

    constructor(private activatedRoute: ActivatedRoute) {
        this.queryParams$ = this.activatedRoute.queryParams.pipe(
            map((params) => {
                const copiedParams = { ...params }
                bannedQueryParams.forEach((bannedParam) => delete copiedParams[bannedParam])
                return copiedParams
            }),
        )
    }
}
