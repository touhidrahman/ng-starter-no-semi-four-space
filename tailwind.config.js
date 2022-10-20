module.exports = {
    prefix: '',
    mode: 'jit',
    content: ['./src/**/*.{html,ts,css,scss,sass,less,styl}'],
    darkMode: 'media', // or 'class'
    theme: {
        extend: {
            colors: {
                // material light blue pallete
                primary: {
                    50: '#e1f5fe',
                    100: '#b3e5fc',
                    200: '#81d4fa',
                    300: '#4fc3f7',
                    400: '#29b6f6',
                    500: '#03a9f4',
                    600: '#039be5',
                    700: '#0288d1',
                    800: '#0277bd',
                    900: '#01579b',
                },
                'primary-hue-100': '#80D8FF',
                'primary-hue-200': '#40C4FF',
                'primary-hue-400': '#00B0FF',
                'primary-hue-700': '#0091EA',
                // material teal pallete
                accent: {
                    50: '#e0f2f1',
                    100: '#b2dfdb',
                    200: '#80cbc4',
                    300: '#4db6ac',
                    400: '#26a69a',
                    500: '#009688',
                    600: '#00897b',
                    700: '#00796b',
                    800: '#00695c',
                    900: '#004d40',
                },
                'accent-hue-100': '#A7FFEB',
                'accent-hue-200': '#64FFDA',
                'accent-hue-400': '#1DE9B6',
                'accent-hue-700': '#00BFA5',
                // material red pallete
                warn: {
                    50: '#ffebee',
                    100: '#ffcdd2',
                    200: '#ef9a9a',
                    300: '#e57373',
                    400: '#ef5350',
                    500: '#f44336',
                    600: '#e53935',
                    700: '#d32f2f',
                    800: '#c62828',
                    900: '#b71c1c',
                },
                'warn-hue-100': '#FF8A80',
                'warn-hue-200': '#FF5252',
                'warn-hue-400': '#FF1744',
                'warn-hue-700': '#D50000',
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
        require('@tailwindcss/line-clamp'),
        require('tailwind-scrollbar'),
        require('prettier-plugin-tailwindcss'),
    ],
}
