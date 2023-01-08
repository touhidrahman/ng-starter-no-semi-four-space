import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'

@Component({
    standalone: true,
    imports: [CommonModule],
    selector: 'app-navbar',
    template: `
        <header class="navbar bg-primary">
            <section class="container mx-auto">
                <div class="flex-1 lg:flex-none">
                    <div class="flex items-center gap-4">
                        <div class="h-12 w-auto overflow-hidden">
                            <ng-content select="#logo"></ng-content>
                        </div>
                        <ng-content select="h1"></ng-content>
                    </div>
                </div>
                <div class="flex flex-1 justify-end px-2">
                    <ng-content></ng-content>
                </div>
            </section>
        </header>
    `,
})
export class NavbarComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        void 0
    }
}
