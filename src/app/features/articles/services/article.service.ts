import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BaseService } from '@core/services/base.service'
import { Article, ArticleDto } from '../interfaces/article'

@Injectable({
    providedIn: 'root',
})
export class ArticleService extends BaseService<Article, ArticleDto> {
    constructor(protected http: HttpClient) {
        super(http, '/posts')
    }
}
