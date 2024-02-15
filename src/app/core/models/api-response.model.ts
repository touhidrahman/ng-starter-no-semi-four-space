export interface ApiResponseMeta {
    total?: number
    page?: number
    size?: number
    [Key: string]: unknown
}

export interface ApiResponse<T> {
    data?: T
    meta?: ApiResponseMeta
    error?: unknown
    message?: string
    code: number
}
