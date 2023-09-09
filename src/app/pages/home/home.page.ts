import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SpreadIntoArrayPipe } from '@core/pipes/spread-into-array.pipe'
import { AppStateService } from '@core/states/app-state.service'
import { ButtonComponent } from '@core/ui/button/button.component'
import { MaterialModules } from '@core/ui/material'
import { ToastService } from '@core/ui/toast/toast.service'

@Component({
    standalone: true,
    imports: [CommonModule, MaterialModules, RouterModule, ButtonComponent, SpreadIntoArrayPipe],
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export default class HomePage {
    constructor(public appState: AppStateService, public toast: ToastService) {}

    openToast(): void {
        this.toast.success('This is a toast')
    }

    openSnackbar(): void {
        this.toast.snackbar('This is a toast')
    }
}
