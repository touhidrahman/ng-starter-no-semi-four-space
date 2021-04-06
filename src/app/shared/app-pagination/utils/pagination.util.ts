import { Params } from '@angular/router'
import { Pagination } from '../interfaces/pagination'
import { defaultPaginationValues } from '../values/pagination.values'

/**
 * Pass random queryParams to this function and it will return correct pagination values from the query params.
 * If any value is not available, then it will use default pagination values
 * @param params Params
 */
export function getPagination(params: Params, defaultValues: Pagination = defaultPaginationValues): Pagination {
    const _start = +params._start || +params.start || defaultValues._start
    const _limit = +params._limit || +params.limit || defaultValues._limit
    const _sort = params._sort ?? params.sort ?? defaultValues._sort

    return { _start, _limit, _sort }
}
