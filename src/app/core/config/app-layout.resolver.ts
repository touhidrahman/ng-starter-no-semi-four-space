import { inject } from '@angular/core'
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router'
import { AppLayoutType } from '@core/models'
import { AppLayoutService } from './app-layout.service'

/**
 * Sets the layout type through a resolver so that before navigating to a component
 * layout is available. Uses the root state service `AppStateService`
 */
export const setLayout = (inputLayout: AppLayoutType): ResolveFn<void> => {
    return (_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) => {
        inject(AppLayoutService).setLayout(inputLayout)
    }
}
