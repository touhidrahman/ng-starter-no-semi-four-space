import { Injectable, OnDestroy } from '@angular/core'
import { Subject } from 'rxjs'
import { StateSubject } from 'rxjs-state-subject'

@Injectable()
export class BasicState implements OnDestroy {
    loading = new StateSubject<boolean>(false)

    protected destroyed = new Subject<void>()

    reset(): void {
        this.loading.reset()
    }

    ngOnDestroy(): void {
        this.destroyed.next()
        this.destroyed.complete()
    }
}
