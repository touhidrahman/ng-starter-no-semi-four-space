import { Inject, Injectable } from '@angular/core'
import { APP_CONFIG, AppConfig } from '@core/config/app-config'
import { AppLayoutType } from '@core/models'
import { BehaviorSubject, Observable } from 'rxjs'

/**
 * Stores crucial information and functionalities for the app's full lifecycle
 */
@Injectable({
    providedIn: 'root',
})
export class AppStateService {
    private loadingSubject = new BehaviorSubject<boolean>(true)
    private layoutSubject = new BehaviorSubject<AppLayoutType>(AppLayoutType.Default)

    get appName(): string {
        return this.appConfig.appName
    }

    get loading(): boolean {
        return this.loadingSubject.value
    }

    get layout$(): Observable<AppLayoutType> {
        return this.layoutSubject.asObservable()
    }

    constructor(@Inject(APP_CONFIG) readonly appConfig: AppConfig) {}

    setLayout(value: AppLayoutType) {
        this.layoutSubject.next(value)
    }

    startLoading(): void {
        this.loadingSubject.next(true)
    }

    stopLoading(): void {
        this.loadingSubject.next(false)
    }

    setLoading(loading: boolean): void {
        this.loadingSubject.next(loading)
    }

}
