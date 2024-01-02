/* eslint-disable no-undef */
module.exports = {
    prefix: '',
    content: [
        './src/**/*.{html,ts,css,scss,sass,less,styl}',
        './libs/ui/**/*.{html,ts}',
    ],
    darkMode: 'class', // or 'media'
    theme: {
        extend: {},
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
        // require('prettier-plugin-tailwindcss'),
    ],
}
