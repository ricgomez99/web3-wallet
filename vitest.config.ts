import { defineConfig, configDefaults } from 'vitest/config'
import { resolve } from 'path'

export default defineConfig({
  test: {
    globals: true,
    exclude: [...configDefaults.exclude],
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
