import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./Test/setup.js'],
    coverage: {
      include: ['src/components/Accordion.jsx', 'src/components/PropertyCard.jsx'],
      thresholds: {
        'src/components/Accordion.jsx': {
          statements: 81,
          branches: 81,
          functions: 81,
          lines: 81,
        },
        'src/components/PropertyCard.jsx': {
          statements: 81,
          branches: 81,
          functions: 81,
          lines: 81,
        },
      },
    },
  },
})
