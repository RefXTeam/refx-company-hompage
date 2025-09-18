/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#faf7f2',
          100: '#f4ebe0',
          200: '#e8d5c0',
          300: '#d9b896',
          400: '#c8966a',
          500: '#bc7e4f',
          600: '#af6d43',
          700: '#915839',
          800: '#764833',
          900: '#603d2c',
        },
        refx: {
          primary: '#2563eb',
          secondary: '#64748b',
          accent: '#f59e0b',
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Apple SD Gothic Neo"',
          '"Pretendard"',
          'sans-serif'
        ],
      },
    },
  },
  plugins: [],
}