/** @type {import('tailwindcss').Config} */
/* eslint-disable no-undef */
module.exports = {
    content: ['./src/**/*.{html,ts,css,scss,sass,less,styl}'],
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
        require('tailwindcss-elevation'),
        require('tailwindcss-primeui'),
    ],
}
