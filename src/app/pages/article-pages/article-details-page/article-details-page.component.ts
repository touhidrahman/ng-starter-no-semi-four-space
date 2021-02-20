import { Observable } from 'rxjs'
import { filter, map } from 'rxjs/operators'
import { Component } from '@angular/core'
import { FormControl } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { getPagination } from '@shared/app-pagination/utils/pagination.util'
import { ArticleDetailsPageService } from './article-details-page.service'
import { ArticleDetailsPageState } from './article-details-page.state'

@Component({
    templateUrl: './article-details-page.component.html',
    styleUrls: ['./article-details-page.component.scss'],
    providers: [ArticleDetailsPageService],
})
export class ArticleDetailsPageComponent {
    state$: Observable<ArticleDetailsPageState>
    searchInput: FormControl

    constructor(private stateService: ArticleDetailsPageService, private activatedRoute: ActivatedRoute) {
        this.setArticle()
        this.updateFromQueryParam()
        this.searchInput = this.stateService.controlSearchTerm()
        this.state$ = this.stateService.state$
    }

    private setArticle(): void {
        this.activatedRoute.paramMap
            .pipe(
                filter((params) => params.has('id')),
                map((params) => params.get('id')),
            )
            .subscribe((id) => this.stateService.updateArticleId(Number(id)))
    }

    private updateFromQueryParam(): void {
        this.activatedRoute.queryParams
            .pipe(map((params) => getPagination(params)))
            .subscribe((pagination) => this.stateService.updateCommentsPagination(pagination))

        this.activatedRoute.queryParams
            .pipe(map((params) => params?.q ?? ''))
            .subscribe((searchTerm) => this.stateService.updateSearchTerm(searchTerm))
    }
}
