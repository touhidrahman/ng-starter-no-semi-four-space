import { effect, signal, WritableSignal } from '@angular/core'
import destr from 'destr'

export interface StorageSignalOptions<T> {
    storage?: Storage
    serializer?: (v: T) => string
    deserializer?: (raw: string) => T
    crossTabSync?: boolean
}

export function storageSignal<T>(
    key: string,
    defaultValue: T,
    options: StorageSignalOptions<T> = {},
): WritableSignal<T> {
    const {
        storage = localStorage,
        serializer = JSON.stringify,
        deserializer = destr, // or JSON.parse
        crossTabSync = true,
    } = options

    let initial = defaultValue
    try {
        const raw = storage.getItem(key)
        if (raw !== null) initial = deserializer(raw)
    } catch {}

    const state = signal<T>(initial)

    effect(() => {
        try {
            storage.setItem(key, serializer(state()))
        } catch (err) {
            console.error(`[storageSignal] Persist failed for ${key}:`, err)
        }
    })

    if (crossTabSync && typeof window !== 'undefined') {
        window.addEventListener('storage', (ev: StorageEvent) => {
            if (ev.key !== key || ev.storageArea !== storage) return
            if (ev.newValue === null) return
            try {
                state.set(deserializer(ev.newValue))
            } catch {
                // ignore malformed data
            }
        })
    }

    return state
}
