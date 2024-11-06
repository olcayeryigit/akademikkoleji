/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shine: {
          '0%': { transform: 'translate(-200%, -200%) rotate(-45deg)', opacity: 0, boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)' },
          '50%': { opacity: 1, boxShadow: '0 0 50px rgba(255, 255, 255, 0.7)' },
          '100%': { transform: 'translate(200%, 200%) rotate(-45deg)', opacity: 0, boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)' },
        },
      },
      animation: {
        shine: 'shine 4s ease-in-out infinite', // Animasyon süresini 7 saniyeye çıkardık
      },
    },
  },
  plugins: [],
};
