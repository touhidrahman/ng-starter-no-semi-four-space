import { Inject, Injectable } from '@angular/core'
import { LOCAL_STORAGE } from '@ng-web-apis/common'

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    constructor(@Inject(LOCAL_STORAGE) private readonly storage: Storage) {}

    clear(): void {
        this.storage.clear()
    }

    getItem(key: string): string | null {
        return this.storage.getItem(key)
    }

    key(index: number): string | null {
        return this.storage.key(index)
    }

    removeItem(key: string): void {
        this.storage.removeItem(key)
    }

    setItem(key: string, value: string): void {
        this.storage.setItem(key, value)
    }
}
