import Aura from '@primeuix/themes/aura'
import { PrimeNGConfigType } from 'primeng/config'

export const MyPrimeNGConfig: PrimeNGConfigType = {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: '.app-dark',
            cssLayer: {
                name: 'primeng',
                order: 'theme, base, primeng, utilities',
            },
        },
    },
}
