import { Component, Input } from '@angular/core'
import { ChartData, ChartOptions, ChartType } from 'chart.js'
import { ChartModule } from 'primeng/chart'

@Component({
    selector: 'app-chart',
    imports: [ChartModule],
    template: `<p-chart
     [type]="type"
      [data]="data"
     [options]="options">
     </p-chart>`,
})
export class ChartComponent {
    @Input() type: ChartType = 'pie'
    @Input() data!: ChartData
    @Input() options?: ChartOptions
}
