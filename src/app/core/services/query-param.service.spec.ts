import { TestBed } from '@angular/core/testing'

import { QueryParamService } from './query-param.service'

describe('QueryParamService', () => {
    let service: QueryParamService

    beforeEach(() => {
        TestBed.configureTestingModule({})
        service = TestBed.inject(QueryParamService)
    })

    it('should be created', () => {
        expect(service).toBeTruthy()
    })
})
