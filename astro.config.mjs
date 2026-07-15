// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkLoom from './src/plugins/remarkLoom.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://zhrssh.github.io',
  image: {
    domains: ['placehold.co'],
  },
  markdown: {
    processor: unified({
      remarkPlugins: [remarkLoom],
    }),
  },
});
