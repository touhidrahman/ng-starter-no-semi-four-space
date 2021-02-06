import { Observable } from 'rxjs'
import { filter, map } from 'rxjs/operators'
import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { ViewArticlePageState, ViewArticlePageStateService } from './view-article-page.state.service'

@Component({
    selector: 'app-view-article-page',
    templateUrl: './view-article-page.component.html',
    styleUrls: ['./view-article-page.component.scss'],
    providers: [ViewArticlePageStateService],
})
export class ViewArticlePageComponent implements OnInit {
    state$: Observable<ViewArticlePageState>
    searchInput: FormControl
    start = 0
    limit = 2

    constructor(private stateService: ViewArticlePageStateService, private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.setArticle()
        this.updateFromQueryParam()
        this.setSearchControl()

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
        this.activatedRoute.queryParams.subscribe((params) => this.stateService.updateStateFromQueryParams(params))
    }

    private setSearchControl(): void {
        this.searchInput = this.stateService.controlSearchTerm()
    }
}
