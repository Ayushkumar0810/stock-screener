import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          900: '#1e1b4b'
        },
        ink: '#111827',
        shell: '#eef3f9',
        panel: '#ffffff',
        positive: '#16a34a',
        negative: '#ef4444',
        muted: '#64748b'
      },
      boxShadow: {
        soft: '0 20px 50px rgba(15, 23, 42, 0.08)',
        inset: 'inset 0 1px 0 rgba(255,255,255,0.75)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['"SF Pro Display"', 'Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace']
      }
    }
  },
  plugins: []
};

export default config;
