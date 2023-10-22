const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',

    content: ["./src/**/*.{vue,js}"],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            minHeight: (theme) => ({
                ...theme('spacing'),
            }),
            minWidth: (theme) => ({
                ...theme('spacing'),
            }),
            boxShadow: {
                '3xl': 'rgba(17, 12, 46, 0.09) 0px 48px 100px 0px;',
                '4xl': 'rgba(17, 12, 46, 0.12) 0px 48px 100px 0px;',
            },
        },
    },

    plugins: [
        // require('@tailwindcss/forms'),
        // require('@tailwindcss/typography')
    ],
};
