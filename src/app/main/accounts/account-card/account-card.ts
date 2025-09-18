import { CurrencyPipe } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-account-card',
    imports: [CurrencyPipe],
    template: `
    <div class="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm dark:bg-background-dark/50">
        <div class="flex items-center gap-4">
            @if(account.iconClass){
                <div class="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary text-3xl"
                >
                 <i [class]="account.iconClass"></i>
              </div>
            }

            <!-- Account Info -->
            <div class="flex flex-col">
                <p class="text-sm font-medium text-gray-800 dark:text-white">
                    {{ account.name }}
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                    {{ account.email }}
                </p>
            </div>
        </div>
        <div class="text-right">
            <p class="text-lg font-medium text-gray-800 dark:text-white">
                {{ account.balance | currency: userCurrency }}
            </p>
        </div>

    </div>
    `,
})
export class AccountCardComponent {
    @Input() account!: any
    @Input() userCurrency = 'USD'
}
