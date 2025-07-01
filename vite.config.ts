import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: './',
	publicDir: 'public',
	build: {
		outDir: 'build',
		target: 'esnext',
		chunkSizeWarningLimit: 1000,
	},
	esbuild: {
		logOverride: { 'this-is-undefined-in-esm': 'silent' },
		jsx: 'automatic',
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
});
