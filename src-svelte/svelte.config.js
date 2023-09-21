import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),

	kit: {
		adapter: adapter({
      fallback: "index.html",
		}),
    alias: {
      $components: 'src/lib/components',
      $utils: 'src/lib/utils',
      $store: 'src/lib/store'
    }
   }
};

export default config;
