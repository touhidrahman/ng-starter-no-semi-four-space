import { Injectable } from '@angular/core'
import { DEFAULT_PAGE_SIZE } from '@core/values/pagination'
import { StateSubject } from '@core/utils/state-subject'
import { BasicState } from './basic-state.service'

@Injectable()
export class BasicPageState extends BasicState {
    page = new StateSubject<number>(1)
    size = new StateSubject<number>(DEFAULT_PAGE_SIZE)
    search = new StateSubject<string>('')
    orderBy = new StateSubject<string>('id')
    sort = new StateSubject<'asc' | 'desc'>('asc')

    constructor() {
        super()
        // if search term changes, reset page
        this.search.value$.subscribe({
            next: () => this.page.reset(),
        })
    }

    override reset(): void {
        this.search.reset()
        this.page.reset()
        this.size.reset()
        this.orderBy.reset()
        this.sort.reset()
        super.reset()
    }
}
