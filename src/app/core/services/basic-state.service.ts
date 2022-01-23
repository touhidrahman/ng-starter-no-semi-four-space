import { Injectable, OnDestroy } from '@angular/core'
import { Subject } from 'rxjs'
import { StateSubject } from 'rxjs-state-subject'

@Injectable()
export class BasicState implements OnDestroy {
    loading = new StateSubject<boolean>(false)
    page = new StateSubject<number>(0)
    search = new StateSubject<string>('')

    protected destroyed = new Subject<void>()

    ngOnDestroy(): void {
        this.destroyed.next()
        this.destroyed.complete()
    }
}
