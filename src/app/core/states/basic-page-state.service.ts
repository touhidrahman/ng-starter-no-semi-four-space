import { Injectable } from '@angular/core'
import { StateSubject } from 'rxjs-state-subject'
import { BasicState } from './basic-state.service'

@Injectable()
export class BasicPageState extends BasicState {
    page = new StateSubject<number>(1)
    search = new StateSubject<string>('')

    constructor() {
        super()
        // if search term changes, reset page
        this.search.value$.subscribe({
            next: () => this.page.reset(),
        })
    }

    reset(): void {
        this.search.reset()
        this.page.reset()
        super.reset()
    }
}
