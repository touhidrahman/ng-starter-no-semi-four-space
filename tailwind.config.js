/* eslint-disable no-undef */
module.exports = {
    prefix: '',
    content: ['./src/**/*.{html,ts,css,scss,sass,less,styl}'],
    darkMode: 'media', // or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: '#416680',
                    'primary-content': '#ffffff',
                    secondary: '#a4d4d4',
                    'secondary-content': '#000000',
                    accent: '#38bfa5',
                    'accent-content': '#000000',
                    neutral: '#d8dadc',
                    'base-100': '#FFFFFF',
                    info: '#3ABFF8',
                    success: '#65a30d',
                    warning: '#FBBD23',
                    error: '#cc0000',

                    '--rounded-box': '0.25rem', // border radius rounded-box utility class, used in card and other large boxes
                    '--rounded-btn': '0.25rem', // border radius rounded-btn utility class, used in buttons and similar element
                    '--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
                    '--animation-btn': '0.25s', // duration of animation when you click on button
                    '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
                    '--btn-text-case': '', // set default text transform for buttons
                    '--btn-focus-scale': '1', // scale transform of button when you focus on it
                    '--border-btn': '1px', // border width of buttons
                    '--tab-border': '1px', // border width of tabs
                    '--tab-radius': '0.25rem', // border radius of tabs
                },
            },
        ],
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('tailwindcss-elevation'),
        require('tailwind-scrollbar'),
        // require('prettier-plugin-tailwindcss'),
        require('daisyui'),
        require('@spartan-ng/ui-core/hlm-tailwind-preset'),
    ],
}
