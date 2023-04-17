import { Injectable } from '@angular/core'
import { HotToastService, ToastOptions } from '@ngneat/hot-toast'

@Injectable({
    providedIn: 'root',
})
export class ToastService {
    private commonStyles: ToastOptions<any> = {
        dismissible: true,
        position: 'top-right',
        style: {
            margin: '6rem 2rem 0 0',
        },
    }

    constructor(public hotToast: HotToastService) {}

    snackbar(message: string): void {
        this.hotToast.show(message, {
            theme: 'snackbar',
            position: 'bottom-center',
            duration: 5000,
        })
    }

    loading(message: string) {
        return this.hotToast.loading(message, { ...this.commonStyles })
    }

    success(message: string): void {
        this.hotToast.success(message, { ...this.commonStyles })
    }

    info(message: string): void {
        this.hotToast.info(message, { ...this.commonStyles })
    }

    error(message: string): void {
        this.hotToast.error(message, { ...this.commonStyles })
    }

    warn(message: string): void {
        this.hotToast.warning(message, { ...this.commonStyles })
    }

    persistent(message: string): void {
        this.hotToast.info(message, {
            ...this.commonStyles,
            autoClose: false,
            dismissible: true,
        })
    }
}
