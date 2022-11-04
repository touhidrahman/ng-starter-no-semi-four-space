import { Platform } from '@angular/cdk/platform'
import { inject } from '@angular/core'
import { WINDOW } from '@ng-web-apis/common'

export function isSmallScreen(): boolean {
    const platform = inject(Platform)
    const win = inject(WINDOW)

    return platform.ANDROID || platform.IOS || win.innerWidth < 640
}
