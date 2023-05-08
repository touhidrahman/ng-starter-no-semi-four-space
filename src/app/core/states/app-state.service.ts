import { Inject, Injectable } from '@angular/core'
import { APP_ENVIRONMENT } from '@environment/app-environment.injector'
import { AppEnvironment } from '@environment/app-environment.interface'
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
        return this.appEnvironment.appName
    }

    get loading(): boolean {
        return this.loadingSubject.value
    }

    constructor(@Inject(APP_ENVIRONMENT) readonly appEnvironment: AppEnvironment) {}

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
