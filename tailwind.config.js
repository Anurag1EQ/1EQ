/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#E63946',
                accent: '#2563EB',
                success: '#059669',
                purple: '#7C3AED',
            },
            fontFamily: {
                sans: ['DM Sans', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
        },
    },
    plugins: [],
}
