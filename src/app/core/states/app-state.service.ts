import { Injectable } from '@angular/core'
import {
    ActivatedRoute,
    NavigationCancel,
    NavigationEnd,
    NavigationError,
    NavigationStart,
    Router,
} from '@angular/router'
import { APP_NAME } from '@core/config/app-title'
import { BehaviorSubject, combineLatest, filter, interval, map, zip } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class AppStateService {
    #isLoading = true
    private loadingSubject = new BehaviorSubject<boolean>(false)

    appName = APP_NAME

    get loading(): boolean {
        return this.#isLoading
    }

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
        this.continueUpdatingLoadingValue()
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
