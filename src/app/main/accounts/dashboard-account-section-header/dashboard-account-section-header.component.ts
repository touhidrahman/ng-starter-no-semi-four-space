import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-account-section-header',
  imports: [],
  templateUrl: './dashboard-account-section-header.component.html',
  styleUrl: './dashboard-account-section-header.component.css'
})
export class DashboardAccountSectionHeaderComponent {
    title = input.required()
}
