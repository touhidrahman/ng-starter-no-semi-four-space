import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { RouterModule } from '@angular/router'
import { HeaderNavigationsComponent } from '../header-navigations/header-navigations.component'

@Component({
    selector: 'app-header-one',
    standalone: true,
    imports: [CommonModule, RouterModule, HeaderNavigationsComponent],
    templateUrl: './header-one.component.html',
    styleUrls: ['./header-one.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderOneComponent implements OnInit {
    ngOnInit(): void {}
}
