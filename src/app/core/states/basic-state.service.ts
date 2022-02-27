import { Injectable, OnDestroy } from '@angular/core'
import { Subject } from 'rxjs'
import { StateSubject } from 'rxjs-state-subject'

@Injectable()
export class BasicState implements OnDestroy {
    loading = new StateSubject<boolean>(false)
    page = new StateSubject<number>(1)
    search = new StateSubject<string>('')

    protected destroyed = new Subject<void>()

    constructor() {
        // if search term changes, reset page
        this.search.value$.subscribe({
            next: () => this.page.reset(),
        })
    }

    reset(): void {
        this.search.reset()
        this.page.reset()
        this.loading.reset()
    }

    ngOnDestroy(): void {
        this.destroyed.next()
        this.destroyed.complete()
    }
}
