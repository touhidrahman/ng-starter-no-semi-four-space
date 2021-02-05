import { BehaviorSubject, Observable } from 'rxjs'
import { distinctUntilChanged } from 'rxjs/operators'

export class StateAtom<T> {
    value$: Observable<T>

    private store: BehaviorSubject<T>
    private value: T
    private initialValue: T

    constructor(initialValue: T) {
        this.initialValue = initialValue
        this.value = initialValue
        this.store = new BehaviorSubject<T>(initialValue)
        this.value$ = this.store.asObservable().pipe(distinctUntilChanged())
    }

    update(value: T): void {
        this.value = value
        this.store.next(this.value)
    }

    getValue(): T {
        return this.value
    }

    reset(): void {
        this.value = this.initialValue
    }
}
