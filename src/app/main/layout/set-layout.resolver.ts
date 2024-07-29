import { inject } from '@angular/core'
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router'
import { PageLayout } from './page-layout.enum'
import { PageLayoutService } from './page-layout.service'

/**
 * Sets the page layout type through a resolver so that before navigating to a component layout is available.
 */
export const setLayout = (inputLayout: PageLayout): ResolveFn<void> => {
    return (_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) => {
        inject(PageLayoutService).setLayout(inputLayout)
    }
}
