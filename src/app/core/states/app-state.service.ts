import { Inject, Injectable } from '@angular/core'
import { APP_CONFIG, AppConfig } from '@core/config/app-config'
import { BehaviorSubject } from 'rxjs'

/**
 * Stores crucial information and functionalities for the app's full lifecycle
 */
@Injectable({
    providedIn: 'root',
})
export class AppStateService {
    private loadingSubject = new BehaviorSubject<boolean>(true)

    get appName(): string {
        return this.appConfig.appName
    }

    get loading(): boolean {
        return this.loadingSubject.value
    }

    constructor(@Inject(APP_CONFIG) readonly appConfig: AppConfig) {}

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
