import { combineLatest, Observable, of } from 'rxjs'
import { debounceTime, distinctUntilChanged, filter, switchMap, tap } from 'rxjs/operators'
import { Injectable } from '@angular/core'
import { FormControl } from '@angular/forms'
import { combineLatestToObject } from '@core/rxjs-operators/combine-latest-to-object'
import { StateAtom } from '@core/state/state-atom'
import { Article } from '@features/articles/interfaces/article'
import { ArticleService } from '@features/articles/services/article.service'
import { Comment } from '@features/comments/interfaces/comment'
import { CommentService } from '@features/comments/services/comment.service'
import { Pagination } from '@shared/app-pagination/interfaces/pagination'
import { ArticleDetailsPageState } from './article-details-page.state'

const initialState: ArticleDetailsPageState = {
    id: undefined,
    article: undefined,
    comments: [],
    loading: false,
    searchTerm: '',
    commentsPagination: {
        _limit: 10,
        _start: 0,
        _sort: '',
    },
}

@Injectable()
export class ArticleDetailsPageService {
    private currentState: ArticleDetailsPageState = initialState

    private id: StateAtom<number | undefined> = new StateAtom(initialState.id)
    private article: StateAtom<Article | undefined> = new StateAtom(initialState.article)
    private loading: StateAtom<boolean> = new StateAtom(initialState.loading)
    private searchTerm: StateAtom<string> = new StateAtom(initialState.searchTerm)
    private comments: StateAtom<Comment[]> = new StateAtom(initialState.comments)
    private commentsPagination: StateAtom<Pagination> = new StateAtom(initialState.commentsPagination)

    state$: Observable<ArticleDetailsPageState> = combineLatestToObject({
        id: this.id.value$,
        article: this.article.value$,
        comments: this.comments.value$,
        loading: this.loading.value$,
        searchTerm: this.searchTerm.value$,
        commentsPagination: this.commentsPagination.value$,
    }).pipe(tap((state) => (this.currentState = state)))

    constructor(private articleService: ArticleService, private commentService: CommentService) {
        this.handleEffects()
    }

    controlSearchTerm(initialValue = ''): FormControl {
        const control = new FormControl(initialValue)

        control.valueChanges
            .pipe(debounceTime(300), distinctUntilChanged())
            .subscribe((value) => this.searchTerm.update(value))

        return control
    }

    updateArticleId(id: number): void {
        this.id.update(id)
    }

    updateCommentsPagination(pagination: Pagination): void {
        this.commentsPagination.update(pagination)
    }

    updateSearchTerm(searchTerm: string): void {
        this.searchTerm.update(searchTerm)
    }

    getStateSnapshot(): ArticleDetailsPageState {
        return { ...this.currentState }
    }

    resetState(): void {
        this.id.reset()
        this.article.reset()
        this.loading.reset()
        this.comments.reset()
        this.searchTerm.reset()
        this.commentsPagination.reset()
    }

    private handleEffects() {
        this.id.value$
            .pipe(
                filter((id) => !!id),
                switchMap((id) => this.articleService.findById(String(id))),
            )
            .subscribe((article) => this.article.update(article))

        combineLatest([this.id.value$, this.searchTerm.value$, this.commentsPagination.value$])
            .pipe(
                debounceTime(300),
                tap(() => this.loading.update(true)),
                switchMap(([id, _searchTerm, params]) =>
                    id ? this.commentService.findCommentsForArticle(id, params) : of([]),
                ),
            )
            .subscribe((comments) => {
                this.comments.update(comments)
                this.loading.update(false)
            })
    }
}
