import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root',
})
export class ToastService {
    snackbar(message: string): void {
        alert(message)
    }

    loading(message: string) {
        alert(message)
    }

    success(message: string): void {
        alert(message)
    }

    info(message: string): void {
        alert(message)
    }

    error(message: string): void {
        alert(message)
    }

    warn(message: string): void {
        alert(message)
    }

    persistent(message: string): void {
        alert(message)
    }
}
