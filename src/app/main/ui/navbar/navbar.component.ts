import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
    standalone: true,
    imports: [CommonModule],
    selector: 'app-navbar',
    template: `
        <header class="navbar bg-primary">
            <div class="flex-1 lg:flex-none">
                <div class="flex items-center gap-4">
                    <ng-content select="#toggler"></ng-content>
                    <div class="h-12 w-auto overflow-hidden">
                        <ng-content select="#logo"></ng-content>
                    </div>
                    <ng-content select="h1"></ng-content>
                </div>
            </div>
            <div class="flex flex-1 justify-end px-2">
                <ng-content></ng-content>
            </div>
        </header>
    `,
})
export class NavbarComponent {}
