import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'

@Component({
    standalone: true,
    imports: [CommonModule],
    selector: 'app-navbar',
    template: `
        <div class="bg-primary-900 py-4 px-8 text-primary-50">
            <div class="container mx-auto flex items-center justify-between">
                <div class="flex h-16 items-center gap-4">
                    <div class="h-16 w-auto overflow-hidden ">
                        <ng-content select="#logo"></ng-content>
                    </div>
                    <ng-content select="h1"></ng-content>
                </div>
                <ng-content></ng-content>
            </div>
        </div>
    `,
})
export class NavbarComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        void 0
    }
}
