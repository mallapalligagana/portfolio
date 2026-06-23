module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#eef2ff',
          DEFAULT: '#7c3aed'
        }
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(90deg,#7c3aed 0%,#06b6d4 100%)'
      }
    }
  },
  plugins: []
}
