/** @type {import('tailwindcss').Config} */
/* eslint-disable no-undef */
module.exports = {
    prefix: '',
    presets: [require('@spartan-ng/ui-core/hlm-tailwind-preset')],
    content: ['./src/**/*.{html,ts,css,scss,sass,less,styl}', './libs/ui/**/*.{html,ts}'],
    darkMode: 'class', // or 'media'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('tailwindcss-elevation'),
        require('tailwind-scrollbar'),
        // require('prettier-plugin-tailwindcss'),
    ],
}
