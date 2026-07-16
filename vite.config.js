import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	root: 'src',
	base: './',
	publicDir: false,

	build: {
		outDir: '../dist',
		emptyOutDir: true,
		rollupOptions: {
			output: {
				assetFileNames: 'assets/[name][extname]',
				chunkFileNames: 'js/[name].js',
				entryFileNames: 'js/[name].js',
			},
		},
	},

	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler',
				loadPaths: [path.resolve('node_modules')],
			},
		},
	},
});
