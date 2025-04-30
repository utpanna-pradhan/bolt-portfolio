/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        primary: {
          50: '#e6f1fe',
          100: '#cce3fd',
          200: '#99c7fb',
          300: '#66abf9',
          400: '#338ff7',
          500: '#0070F3',
          600: '#005ac2',
          700: '#004392',
          800: '#002d61',
          900: '#001631',
        },
        secondary: {
          50: '#f3eefa',
          100: '#e7ddf5',
          200: '#cfbbeb',
          300: '#b799e0',
          400: '#9f77d6',
          500: '#6D28D9',
          600: '#5720ae',
          700: '#411882',
          800: '#2c1057',
          900: '#16082b',
        },
        accent: {
          50: '#fef4e6',
          100: '#fee9cc',
          200: '#fdd399',
          300: '#fcbd66',
          400: '#fba733',
          500: '#F59E0B',
          600: '#c47e09',
          700: '#935f06',
          800: '#623f04',
          900: '#312002',
        },
        success: {
          500: '#10B981',
        },
        warning: {
          500: '#F59E0B',
        },
        error: {
          500: '#EF4444',
        },
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};