import { Component } from '@angular/core'
import { DashboardAccountWidgetComponent } from '@main/accounts/dashboard-account-widget/dashboard-account-widget.component'

@Component({
    selector: 'app-home',
    imports: [DashboardAccountWidgetComponent],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export default class HomeComponent {}
