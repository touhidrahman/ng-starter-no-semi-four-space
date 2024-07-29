import { shake } from 'radash'
import { Observable, of } from 'rxjs'
import { SimpleStore } from './simple-store'

export class QueryResultStore<Q, R, T> extends SimpleStore<{ query: Q; result: R; transient: T }> {
    private cache: Map<string, R> = new Map()

    get query$(): Observable<Q> {
        return this.select('query')
    }

    get result$(): Observable<R> {
        return this.select('result')
    }

    get transient$(): Observable<T> {
        return this.select('transient')
    }

    setQuery(query: Partial<Q>): void {
        this.setState({ query: { ...this.getState().query, ...query } })
    }

    getQuery(): Q {
        return this.getState().query
    }

    setResult(result: Partial<R>): void {
        const newResult = { ...this.getState().result, ...result }
        this.cache.set(this.getCacheKey(), newResult)
        this.setState({ result: newResult })
    }

    getResult(): R {
        return this.getState().result
    }

    setTransient(transient: Partial<T>): void {
        this.setState({ transient: { ...this.getState().transient, ...transient } })
    }

    getTransient(): T {
        return this.getState().transient
    }

    getCacheKey() {
        return JSON.stringify(shake(this.getState().query))
    }

    getCachedResult(): R | undefined {
        const key = this.getCacheKey()
        if (this.cache.has(key)) {
            return this.cache.get(key)
        }
        return undefined
    }

    cacheResult(result: R): void {
        this.cache.set(this.getCacheKey(), result)
    }
}
