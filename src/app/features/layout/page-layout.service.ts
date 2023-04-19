import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { PageLayout } from './page-layout.enum'

@Injectable({
    providedIn: 'root',
})
export class PageLayoutService {
    private layoutSubject = new BehaviorSubject<PageLayout>(PageLayout.Blank)

    get layout$(): Observable<PageLayout> {
        return this.layoutSubject.asObservable()
    }

    setLayout(value: PageLayout) {
        this.layoutSubject.next(value)
    }
}
