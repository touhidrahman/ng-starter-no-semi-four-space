import { Inject, Injectable } from '@angular/core'
import {
    NavigationCancel,
    NavigationEnd,
    NavigationError,
    NavigationStart,
    Router
} from '@angular/router'
import { APP_CONFIG, AppConfig } from '@core/config/app-config'
import { AppLayoutType } from '@core/models'
import { BehaviorSubject, Observable, combineLatest, filter, interval, map, zip } from 'rxjs'

/**
 * Stores crucial information and functionalities for the app's full lifecycle
 */
@Injectable({
    providedIn: 'root',
})
export class AppStateService {
    #isLoading = true
    private loadingSubject = new BehaviorSubject<boolean>(false)
    private layoutSubject = new BehaviorSubject<AppLayoutType>(AppLayoutType.Blank)

    get appName(): string {
        return this.appConfig.appName
    }

    get loading(): boolean {
        return this.#isLoading
    }

    get layout$(): Observable<AppLayoutType> {
        return this.layoutSubject.asObservable()
    }

    constructor(
        private router: Router,
        @Inject(APP_CONFIG) readonly appConfig: AppConfig,
    ) {
        this.continueUpdatingLoadingValue()
    }

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

    // TODO improve
    private continueUpdatingLoadingValue() {
        const navigating = this.router.events.pipe(
            filter(
                (e) =>
                    e instanceof NavigationStart ||
                    e instanceof NavigationEnd ||
                    e instanceof NavigationCancel ||
                    e instanceof NavigationError,
            ),
            map((e) => e instanceof NavigationStart),
        )
        const navigationDone = zip([navigating, interval(500)], (a, _b) => a)
        const stream = combineLatest([navigationDone, this.loadingSubject.asObservable()]).pipe(map(([a, b]) => a || b))

        zip([stream, interval(500)], (a, _b) => a).subscribe({
            next: (loading) => (this.#isLoading = loading),
        })
    }
}
