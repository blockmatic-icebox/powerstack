/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './ui/**/*.{js,ts,jsx,tsx}',
      '/ui/_legacy/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
  }
  