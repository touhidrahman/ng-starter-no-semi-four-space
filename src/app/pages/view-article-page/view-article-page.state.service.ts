import { combineLatest, Observable } from 'rxjs'
import { debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators'
import { Injectable } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Params } from '@angular/router'
import { StateAtom } from '@core/utils/state-atom'
import { Article } from '@features/articles/interfaces/article'
import { ArticleService } from '@features/articles/services/article.service'
import { Comment } from '@features/comments/interfaces/comment'
import { CommentService } from '@features/comments/services/comment.service'

export interface ViewArticlePageState {
    id: number
    article: Article
    comments: Comment[]
    searchTerm: string
    loading: boolean
    commentsPagination: {
        _limit: number
        _start: number
        _sort: string
    }
}

const initialState: ViewArticlePageState = {
    id: undefined,
    article: null,
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
export class ViewArticlePageStateService {
    private currentState: ViewArticlePageState = initialState

    private id: StateAtom<number> = new StateAtom(initialState.id)
    private article: StateAtom<Article> = new StateAtom(initialState.article)
    private loading: StateAtom<boolean> = new StateAtom(initialState.loading)
    private searchTerm: StateAtom<string> = new StateAtom(initialState.searchTerm)
    private comments: StateAtom<Comment[]> = new StateAtom(initialState.comments)
    private commentsPagination: StateAtom<Params> = new StateAtom(initialState.commentsPagination)

    state$: Observable<ViewArticlePageState> = combineLatest([
        this.id.value$,
        this.article.value$,
        this.comments.value$,
        this.loading.value$,
        this.searchTerm.value$,
        this.commentsPagination.value$,
    ]).pipe(
        map(
            ([id, article, comments, loading, searchTerm, commentsPagination]) =>
                ({
                    id,
                    article,
                    comments,
                    loading,
                    searchTerm,
                    commentsPagination,
                } as ViewArticlePageState),
        ),
        tap((state) => (this.currentState = state)),
    )

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

    updateCommentsPagination(start = 0, limit = 10, sort = ''): void {
        this.commentsPagination.update({ start, limit, sort })
    }

    updateStateFromQueryParams(params: Params): void {
        const searchTerm = params?.q || ''
        const start = +params?.start || initialState.commentsPagination._start
        const limit = +params?.limit || initialState.commentsPagination._limit
        const sort = params?.sort || initialState.commentsPagination._sort

        this.searchTerm.update(searchTerm)
        this.updateCommentsPagination(start, limit, sort)
    }

    getStateSnapshot(): ViewArticlePageState {
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
                switchMap((id) => this.articleService.findById(id)),
            )
            .subscribe((article) => this.article.update(article))

        combineLatest([this.id.value$, this.searchTerm.value$, this.commentsPagination.value$])
            .pipe(
                debounceTime(300),
                tap(() => this.loading.update(true)),
                switchMap(([id, searchTerm, params]) =>
                    this.commentService.findCommentsForArticle(id, searchTerm, params),
                ),
            )
            .subscribe((comments) => {
                this.comments.update(comments)
                this.loading.update(false)
            })
    }
}
