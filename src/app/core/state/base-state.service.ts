import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

export class BaseStateService<T> {
    protected currentState: T

    state$: Observable<T>

    constructor(protected initialState: T) {
        this.currentState = initialState
        this.state$ = this.buildState()
        this.onStateChange()
    }

    getStateSnapshot(): T {
        return { ...this.currentState }
    }

    resetState(): void {
        throw new Error('not implemented')
    }

    buildState(): Observable<T> {
        throw new Error('not implemented')
    }

    private onStateChange(): void {
        this.state$.pipe(tap((state) => (this.currentState = state)))
    }
}
