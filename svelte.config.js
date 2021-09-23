import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel'
import netlify from '@sveltejs/adapter-netlify'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	
	kit: {
		adapter: netlify(),
		target: '#svelte'
	}
};

export default config;
