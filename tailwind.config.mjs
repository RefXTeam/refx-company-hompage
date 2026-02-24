/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand Colors (mode-agnostic)
        terra: {
          DEFAULT: '#B85C35',
          hover: '#A04E2C',
          light: '#D4754E',
        },
        sky: {
          brand: '#62A5D7',
        },
        // Light Mode Semantic
        surface: {
          DEFAULT: '#F9FAFB',
          2: '#F3F4F6',
        },
        // Coffee brand
        coffee: {
          50: '#FFFBEB',
          100: '#faf7f2',
          200: '#e8d5c0',
          300: '#FCD34D',
          400: '#D97706',
          500: '#bc7e4f',
          600: '#92400E',
          700: '#78350F',
          800: '#764833',
          900: '#603d2c',
        },
        // Blue system (light mode)
        blue: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        // Semantic aliases
        amber: {
          DEFAULT: '#F59E0B',
        },
        green: {
          brand: '#10B981',
        },
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        sans: ['Noto Sans KR', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['Roboto Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        'display': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '900' }],
        'h1': ['52px', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '800' }],
        'h2': ['36px', { lineHeight: '1.2', letterSpacing: '-0.005em', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'h4': ['18px', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.7', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'label': ['11px', { lineHeight: '1.2', letterSpacing: '0.12em', fontWeight: '700' }],
        'mono-sm': ['13px', { lineHeight: '1.6', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        '8xl': '1440px',
      },
      borderRadius: {
        'card': '12px',
        'btn': '6px',
        'feature': '10px',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.14)',
        'nav': '0 1px 0 rgba(0,0,0,0.08)',
      },
      backgroundImage: {
        'gradient-terra': 'linear-gradient(135deg, #B85C35 0%, #8B4424 100%)',
        'gradient-blue': 'linear-gradient(135deg, #1D4ED8 0%, #2563EB 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        'gradient-coffee': 'linear-gradient(135deg, #78350F 0%, #92400E 100%)',
        'dot-pattern': 'radial-gradient(circle, #94A3B8 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
