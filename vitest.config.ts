import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	test: {
		include: ['src/__tests__/*.test.ts'],
		exclude: ['node_modules', 'dist'],
		environment: 'node'
	},
	plugins: [tsconfigPaths()]
})
