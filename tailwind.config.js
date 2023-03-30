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
                    primary: '#dc2626',
                    secondary: '#0d9488',
                    accent: '#374151',
                    neutral: '#181A2A',
                    'base-100': '#FFFFFF',
                    info: '#3ABFF8',
                    success: '#36D399',
                    warning: '#FBBD23',
                    error: '#ea580c',

                    '--rounded-box': '0.25rem', // border radius rounded-box utility class, used in card and other large boxes
                    '--rounded-btn': '0.15rem', // border radius rounded-btn utility class, used in buttons and similar element
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
        require('tailwind-scrollbar'),
        require('prettier-plugin-tailwindcss'),
        require('daisyui'),
    ],
}
