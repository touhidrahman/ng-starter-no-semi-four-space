import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
    selector: 'app-pagination',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
    @Input() currentPage = 1
    @Input() totalPages = 1
    @Input() size = 24
    @Input() windowSize = 2
    @Input() showFirstLastButton = true
    @Input() routerLinkBase: string[] = []

    getNavigablePages() {
        const pages = []
        const left = Math.max(1, this.currentPage - this.windowSize)
        const right = Math.min(this.totalPages, this.currentPage + this.windowSize)
        for (let i = left; i <= right; i++) {
            pages.push(i)
        }
        return pages
    }
}
