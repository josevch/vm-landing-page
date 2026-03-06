/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                'navy-blue': '#0A192F',
                'pearl-white': '#F9F9F9',
                'metallic-gold': '#C5A059'
            },
            fontFamily: {
                sans: ['Montserrat', 'Inter', 'sans-serif'],
                serif: ['Didot', 'Bodoni MT', 'Times New Roman', 'serif']
            }
        }
    },
    plugins: []
};
