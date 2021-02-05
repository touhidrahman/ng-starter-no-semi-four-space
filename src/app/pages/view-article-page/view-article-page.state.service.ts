import { combineLatest, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Params } from '@angular/router';
import { StateAtom } from '@core/utils/state-atom';
import { Article } from '@features/articles/interfaces/article';
import { Comment } from '@features/comments/interfaces/comment';
import { CommentService } from '@features/comments/services/comment.service';

interface ViewArticlePageState {
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

    private article: StateAtom<Article>
    private comments: StateAtom<Comment[]>
    private loading: StateAtom<boolean>
    private searchTerm: StateAtom<string>
    private commentsPagination: StateAtom<Params>

    state$: Observable<ViewArticlePageState>

    constructor(private commentService: CommentService) {
        this.init()
        this.handleEffects()
    }

    init(): void {
        this.article = new StateAtom(initialState.article)
        this.loading = new StateAtom(initialState.loading)
        this.searchTerm = new StateAtom(initialState.searchTerm)
        this.comments = new StateAtom(initialState.comments)
        this.commentsPagination = new StateAtom(initialState.commentsPagination)

        this.state$ = combineLatest([
            this.article.value$,
            this.comments.value$,
            this.loading.value$,
            this.searchTerm.value$,
            this.commentsPagination.value$,
        ]).pipe(
            map(
                ([article, comments, loading, searchTerm, commentsPagination]) =>
                    ({
                        article,
                        comments,
                        loading,
                        searchTerm,
                        commentsPagination,
                    } as ViewArticlePageState),
            ),
            tap((state) => (this.currentState = state)),
        )
    }

    controlSearchTerm(initialValue = ''): FormControl {
        const control = new FormControl(initialValue)

        control.valueChanges
            .pipe(debounceTime(300), distinctUntilChanged())
            .subscribe((value) => this.searchTerm.update(value))

        return control
    }

    updateArticle(article: Article): void {
        this.article.update(article)
    }

    updateCommentsQueryParams(start = 0, limit = 10, sort = 'createdAt:desc'): void {
        this.commentsPagination.update({ start, limit, sort })
    }

    updateStateFromQueryParams(params: Params): void {
        const searchTerm = params?.q || ''
        const start = +params?.start || initialState.commentsPagination._start
        const limit = +params?.limit || initialState.commentsPagination._limit
        const sort = params?.sort || initialState.commentsPagination._sort

        this.searchTerm.update(searchTerm)
        this.commentsPagination.update({ start, limit, sort })
    }

    getStateSnapshot(): ViewArticlePageState {
        return { ...this.currentState }
    }

    resetState(): void {
        this.article.reset()
        this.loading.reset()
        this.comments.reset()
        this.searchTerm.reset()
        this.commentsPagination.reset()
    }

    private handleEffects() {
        combineLatest([this.article.value$, this.searchTerm.value$, this.commentsPagination.value$])
            .pipe(
                debounceTime(300),
                tap(() => this.loading.update(true)),
                switchMap(([article, searchTerm, params]) =>
                    this.commentService.findCommentsForArticle(article.id, searchTerm, params),
                ),
            )
            .subscribe((comments) => {
                this.comments.update(comments)
                this.loading.update(true)
            })
    }
}
