import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import wasmPack from "vite-plugin-wasm-pack";

const config: UserConfig = {
	plugins: [sveltekit(), wasmPack('./wasm')],
	optimizeDeps: {
		exclude: ['./wasm']
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
};

export default config;
