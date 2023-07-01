/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },

        // text basic size
        fontSize: {
            'xs': '.75rem',
            'sm': '.875rem',
            'base': '.9rem', // 16px
            'lg': '1.125rem', // 18px
            'xl': '1.25rem', // 20px
            '2xl': '1.5rem', // 24px
            '3xl': '1.875rem', // 30px
        },

        fontFamily: {
            'ysabeau': ['Ysabeau Infant', 'sans-serif'],
            'roboto-mono': ['Roboto Mono', 'monospace'],
        }
    },
    plugins: [],
}
