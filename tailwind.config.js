/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#6366F1',    // Indigo
                secondary: '#EC4899',  // Pink
                accent: '#10B981',     // Emerald
                dark: '#0F172A',       // Slate 900
                light: '#F8FAFC',      // Slate 50
                darkBg: '#090E17',
                // Premium Advanced Day Mode Palette
                dayBg: '#F8FAFC',      // Ultra-clean Slate 50
                dayText: '#1E293B',    // Slate 800 for softer contrast
                dayPrimary: '#3B82F6', // Vibrant Blue
                daySecondary: '#8B5CF6', // Modern Violet
                dayAccent: '#0EA5E9',  // Sky Blue for freshness
            },
            fontFamily: {
                heading: ['"Clash Display"', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
                special: ['"Cal Sans"', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-main': 'linear-gradient(135deg, #6366F1, #EC4899, #10B981)',
                'gradient-day': 'linear-gradient(135deg, #3B82F6, #8B5CF6, #0EA5E9)', // More cohesive premium gradient
            },
            animation: {
                'blob': 'blob 7s infinite',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
