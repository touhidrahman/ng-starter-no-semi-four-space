import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
    selector: 'app-searchbar',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './searchbar.component.html',
    styleUrls: ['./searchbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchbarComponent {
    @Output() searchTermChange = new EventEmitter<string>()

    search = ''

    emitSearchTerm(): void {
        this.searchTermChange.emit(this.search)
    }
}
