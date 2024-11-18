import { Platform } from '@angular/cdk/platform'
import { inject } from '@angular/core'
import { WA_WINDOW } from '@ng-web-apis/common'

export function isSmallScreen(): boolean {
    const platform = inject(Platform)
    const win = inject(WA_WINDOW)

    return platform.ANDROID || platform.IOS || win.innerWidth < 640
}
