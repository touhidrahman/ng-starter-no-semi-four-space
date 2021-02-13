import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Params } from '@angular/router'
import { BaseService } from '@core/services/base.service'
import { Comment, CommentDto } from '@features/comments/interfaces/comment'

@Injectable({
    providedIn: 'root',
})
export class CommentService extends BaseService<Comment, CommentDto> {
    constructor(protected http: HttpClient) {
        super(http, '/comments')
    }

    findCommentsForArticle(postId: number, searchTerm = '', params: Params = {}): Observable<Comment[]> {
        return this.http.get<Comment[]>(this.endpoint, { params: { postId: String(postId), ...params } })
    }
}
