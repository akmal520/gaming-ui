/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'bg-pubg': "url('/src/Assets/images/bg-pubg.png')",
            },
            colors: {
                'btn-1': '#D80027',
            },
        },
        fontFamily: {
            body: ['Poppins', 'sans-serif'],
        },
        container: {
            padding: {
                lg: '140px',
            },
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
    },
    plugins: [],
};
