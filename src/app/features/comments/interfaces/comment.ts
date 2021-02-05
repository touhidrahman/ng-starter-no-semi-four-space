export interface Comment {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

export interface CommentDto {
    postId: number
    name: string
    email: string
    body: string
}
