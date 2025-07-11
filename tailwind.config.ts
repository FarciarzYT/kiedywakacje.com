/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // albo dopasuj do siebie
    ],
    theme: {
        extend: {
            colors: {
                background: '#FFFFFF',
                card: '#F6F6F6',
                primary: '#82C7A5',
                secondary: '#F2B8A0',
                accent: '#6CA4D9',
                textMain: '#333333',
                textSub: '#666666',
            },
        },
    },
    plugins: [],
}
