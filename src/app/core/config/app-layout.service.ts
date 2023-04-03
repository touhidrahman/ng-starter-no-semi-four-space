import { Injectable } from '@angular/core'
import { AppLayoutType } from '@core/models'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class AppLayoutService {
    private layoutSubject = new BehaviorSubject<AppLayoutType>(AppLayoutType.Blank)

    get layout$(): Observable<AppLayoutType> {
        return this.layoutSubject.asObservable()
    }

    setLayout(value: AppLayoutType) {
        this.layoutSubject.next(value)
    }

}
