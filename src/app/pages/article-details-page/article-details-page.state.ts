import { Article } from '@features/articles/interfaces/article'
import { Comment } from '@features/comments/interfaces/comment'
import { Pagination } from '@shared/app-pagination/interfaces/pagination'

export interface ArticleDetailsPageState {
    id?: number
    article?: Article
    comments: Comment[]
    searchTerm: string
    loading: boolean
    commentsPagination: Pagination
}
