import { Component, input } from '@angular/core'

@Component({
    selector: 'app-dashboard-account-widget',
    imports: [],
    templateUrl: './dashboard-account-widget.component.html',
    styleUrl: './dashboard-account-widget.component.css',
})
export class DashboardAccountWidgetComponent {
    title = input.required()
    amount = input.required()
    subtitle = input<string>('')
}
