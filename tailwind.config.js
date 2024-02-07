/** @type {import('tailwindcss').Config} */
/* eslint-disable no-undef */
module.exports = {
    prefix: '',
    content: ['./src/**/*.{html,ts,css,scss,sass,less,styl}'],
    darkMode: 'media', // or 'class'
    theme: {
        extend: {
            colors: {
                base: 'var(--base)',
                'base-muted': 'var(--base-muted)',
                contrast: 'var(--contrast)',
                'contrast-muted': 'var(--contrast-muted)',
                accent: 'var(--accent)',
                'accent-contrast': 'var(--accent-contrast)',
                primary: 'var(--primary)',
                'primary-contrast': 'var(--primary-contrast)',
                warn: 'var(--warn)',
                'warn-contrast': 'var(--warn-contrast)',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('tailwindcss-elevation'),
        require('tailwind-scrollbar'),
        // TODO: fix build issue when this plugin is enabled
        // require('prettier-plugin-tailwindcss'),
    ],
}
