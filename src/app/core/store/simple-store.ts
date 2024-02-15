import { isEqual } from 'radash'
import { Observable, Subject, distinctUntilChanged, filter, map, share, takeUntil } from 'rxjs'
import { StateSubject } from './state-subject'

export class SimpleStore<T> {
    private unsubscriber: Subject<void>
    private state: StateSubject<T>

    constructor(value: T, unsubscriber?: Subject<void>) {
        this.state = new StateSubject(value)
        this.unsubscriber = unsubscriber ?? new Subject<void>()
    }

    setState(value: Partial<T>, sideEffectFn?: () => void): void {
        this.state.next({ ...this.state.value, ...value })
        sideEffectFn?.()
    }

    getState(): T {
        return this.state.value
    }

    select<K extends keyof T>(key: K, filterFn?: (value: T[K]) => boolean): Observable<T[K]> {
        return this.state.value$.pipe(
            map((state) => state[key]),
            filter(filterFn ?? (() => true)),
            distinctUntilChanged((a, b) => isEqual(a, b)),
            share(),
            takeUntil(this.unsubscriber),
        )
    }

    selectAll(): Observable<T> {
        return this.state.value$.pipe(share(), takeUntil(this.unsubscriber))
    }

    reset(sideEffectFn?: () => void): void {
        this.state.reset()
        sideEffectFn?.()
    }

    destroy(): void {
        this.unsubscriber.next()
        this.unsubscriber.complete()
    }
}
