export interface StrapiErrorResponse {
    error: {
        message: {
            messages: { message: string }[]
        }[]
    }
}
