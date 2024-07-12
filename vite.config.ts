import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import sveltePackage from './node_modules/svelte/package.json' assert { type: 'json' };
import svelteKitPackage from './node_modules/@sveltejs/kit/package.json' assert { type: 'json' };
import vitePackage from './node_modules/vite/package.json' assert { type: 'json' };
import flowbiteSveltePackage from './node_modules/flowbite-svelte/package.json' assert { type: 'json' };

export default defineConfig({
	plugins: [sveltekit()],
	define: {
    __SVELTE_VERSION__: JSON.stringify(sveltePackage.version),
    __SVELTEKIT_VERSION__: JSON.stringify(svelteKitPackage.version),
		__VITE_VERSION__: JSON.stringify(vitePackage.version),
		__FLOWBITE_SVELTE_VERSION__: JSON.stringify(flowbiteSveltePackage.version)
  },
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
