import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root',
})
export class ToastService {
    snackbar(message: string): void {}

    loading(message: string) {}

    success(message: string): void {}

    info(message: string): void {}

    error(message: string): void {}

    warn(message: string): void {}

    persistent(message: string): void {}
}
