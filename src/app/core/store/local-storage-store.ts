import { Inject, Injectable, inject } from '@angular/core'
import { WA_LOCAL_STORAGE } from '@ng-web-apis/common'
import { destr } from 'destr'

@Injectable()
export class LocalStorageStore<T> {
    private storage = inject(WA_LOCAL_STORAGE)

    constructor(
        @Inject(String) private storageKey: string,
        @Inject(Object) private initialState?: T,
    ) {
        if (!this.storage.getItem(this.storageKey)) {
            this.setState(this.initialState || {})
        }
    }

    setState(value: Partial<T>, sideEffectFn?: () => void): void {
        this.storage.setItem(this.storageKey, JSON.stringify({ ...this.getState(), ...value }))
        sideEffectFn?.()
    }

    getState(): T {
        return destr<T>(this.storage.getItem(this.storageKey))
    }

    select<K extends keyof T>(key: K): T[K] {
        return this.getState()[key]
    }

    destroy(): void {
        this.storage.removeItem(this.storageKey)
    }
}
