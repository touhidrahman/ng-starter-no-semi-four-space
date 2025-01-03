import Aura from '@primeng/themes/aura'
import { PrimeNGConfigType } from 'primeng/config'

export const MyPrimeNGConfig: PrimeNGConfigType = {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: '.dark',
            cssLayer: {
                name: 'primeng',
                order: 'tailwind-base, primeng, tailwind-utilities',
            },
        },
    },
}
