export interface ApiResponseMeta {
    totalResults: number
    totalPages: number
    currentPage: number
    size: number
}

export interface ApiResponse<T> {
    data: T[]
    meta: ApiResponseMeta
}
