import { ApiResponse, ApiResponseMeta } from '@core/models/api-response.model'

export const BLANK_META: ApiResponseMeta = {
    totalResults: 0,
    totalPages: 1,
    currentPage: 1,
    size: 24,
}

export const BLANK_RESPONSE: ApiResponse<any> = {
    data: [],
    meta: BLANK_META,
    code: 200,
}

export const DEFAULT_PAGE_SIZE = 24
