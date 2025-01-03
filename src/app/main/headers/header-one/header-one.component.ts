import { CommonModule, NgClass } from '@angular/common'
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    inject,
} from '@angular/core'
import { RouterModule } from '@angular/router'
import { AppStateService } from '@core/states/app-state.service'
import { PrimeModules } from '@core/ui/primeng'
import { AuthStateService } from '@main/auth/services/auth.service'
import { MegaMenuItem } from 'primeng/api'

@Component({
    selector: 'app-header-one',
    imports: [RouterModule, CommonModule, ...PrimeModules],
    templateUrl: './header-one.component.html',
    styleUrls: ['./header-one.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderOneComponent implements OnInit {
    auth = inject(AuthStateService)
    appState = inject(AppStateService)

    @Input() sidenavToggleVisible = true
    @Output() sidenavToggle = new EventEmitter<void>()

    appName = this.appState.appName
    items: MegaMenuItem[] = [
        {
            label: 'Company',
            root: true,
            items: [
                [
                    {
                        items: [
                            { label: 'Features', icon: 'pi pi-list', subtext: 'Subtext of item' },
                            { label: 'Customers', icon: 'pi pi-users', subtext: 'Subtext of item' },
                            {
                                label: 'Case Studies',
                                icon: 'pi pi-file',
                                subtext: 'Subtext of item',
                            },
                        ],
                    },
                ],
                [
                    {
                        items: [
                            {
                                label: 'Solutions',
                                icon: 'pi pi-shield',
                                subtext: 'Subtext of item',
                            },
                            { label: 'Faq', icon: 'pi pi-question', subtext: 'Subtext of item' },
                            { label: 'Library', icon: 'pi pi-search', subtext: 'Subtext of item' },
                        ],
                    },
                ],
                [
                    {
                        items: [
                            {
                                label: 'Community',
                                icon: 'pi pi-comments',
                                subtext: 'Subtext of item',
                            },
                            { label: 'Rewards', icon: 'pi pi-star', subtext: 'Subtext of item' },
                            { label: 'Investors', icon: 'pi pi-globe', subtext: 'Subtext of item' },
                        ],
                    },
                ],
                [
                    {
                        items: [
                            {
                                image: 'https://primefaces.org/cdn/primeng/images/uikit/uikit-system.png',
                                label: 'GET STARTED',
                                subtext: 'Build spectacular apps in no time.',
                            },
                        ],
                    },
                ],
            ],
        },
        {
            label: 'Resources',
            root: true,
        },
        {
            label: 'Contact',
            root: true,
        },
    ]

    ngOnInit(): void {
        void 0
    }

    toggle(): void {
        this.sidenavToggle.next()
    }
}
