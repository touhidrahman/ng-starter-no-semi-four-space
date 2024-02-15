import { isEqual } from 'radash'
import { BehaviorSubject, Observable, distinctUntilChanged } from 'rxjs'

/**
 * An extended BehaviorSubject that can be reset to its initial value.
 * The stream of change is checked for deep equality so that only when
 * the value has trully changed, the stream will emit.
 *
 * This util is also available as a npm package:
 * https://www.npmjs.com/package/rxjs-state-subject
 * @author Touhid Rahman <mail@touhidrahman.me>
 */
export class StateSubject<T> extends BehaviorSubject<T> {
    private initialValue: T

    constructor(value: T) {
        super(value)
        this.initialValue = value
    }

    get value$(): Observable<T> {
        return super.asObservable().pipe(distinctUntilChanged((a, b) => isEqual(a, b)))
    }

    update(value: T): void {
        this.next(value)
    }

    reset(): void {
        this.next(this.initialValue)
    }
}
