/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fragment Mono', 'monospace'],
        pixel: ['VT323', 'monospace'],
        mono: ['Share Tech Mono', 'monospace'],
        tech: ['IBM Plex Mono', 'monospace'],
      },
      fontSize: {
        'tiny': '0.65rem',
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      colors: {
        amber: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
      },
      animation: {
        'scanline': 'scanline 8s linear infinite',
        'flicker': 'flicker 0.15s infinite',
        'glow': 'glow 1s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        flicker: {
          '0%, 100%': { opacity: '0.9' },
          '50%': { opacity: '1' },
        },
        glow: {
          'from': { textShadow: '0 0 5px #F59E0B, 0 0 10px #F59E0B, 0 0 15px #F59E0B' },
          'to': { textShadow: '0 0 2px #F59E0B, 0 0 5px #F59E0B, 0 0 8px #F59E0B' },
        },
      },
      boxShadow: {
        'glow': '0 0 5px rgba(245, 158, 11, 0.3), 0 0 10px rgba(245, 158, 11, 0.2), 0 0 15px rgba(245, 158, 11, 0.1)',
        'glow-strong': '0 0 5px rgba(245, 158, 11, 0.5), 0 0 10px rgba(245, 158, 11, 0.3), 0 0 15px rgba(245, 158, 11, 0.2), 0 0 20px rgba(245, 158, 11, 0.1)',
      },
    },
  },
  plugins: [],
}