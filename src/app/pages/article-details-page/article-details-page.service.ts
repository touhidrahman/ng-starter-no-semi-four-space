import { combineLatest, Observable, of } from 'rxjs'
import { debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators'
import { Injectable } from '@angular/core'
import { FormControl } from '@angular/forms'
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
    state$: Observable<ArticleDetailsPageState>

    private currentState: ArticleDetailsPageState = initialState

    private id = new StateAtom<number | undefined>(initialState.id)
    private article = new StateAtom<Article | undefined>(initialState.article)
    private loading = new StateAtom<boolean>(initialState.loading)
    private searchTerm = new StateAtom<string>(initialState.searchTerm)
    private comments = new StateAtom<Comment[]>(initialState.comments)
    private commentsPagination = new StateAtom<Pagination>(initialState.commentsPagination)

    constructor(private articleService: ArticleService, private commentService: CommentService) {
        this.state$ = this.buildState()
        this.onStateChange()
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

    private buildState(): Observable<ArticleDetailsPageState> {
        return combineLatest([
            this.id.value$,
            this.article.value$,
            this.comments.value$,
            this.loading.value$,
            this.searchTerm.value$,
            this.commentsPagination.value$,
        ]).pipe(
            map(([id, article, comments, loading, searchTerm, commentsPagination]) => ({
                id,
                article,
                comments,
                loading,
                searchTerm,
                commentsPagination,
            })),
        )
    }

    private onStateChange(): void {
        this.state$.pipe(tap((state) => (this.currentState = state)))
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
