import { NgClass } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-overview-card',
    templateUrl: './overview-card.html',
    imports: [NgClass],
})
export class OverviewCardComponent {
    @Input() bgColor = 'bg-white'
    @Input() textColor = 'text-gray-800'
    @Input() icon!: string
    @Input() title!: string
    @Input() value!: string | number
}
