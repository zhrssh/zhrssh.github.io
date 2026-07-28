// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkVideoEmbed from './src/plugins/remarkVideoEmbed.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://zhrssh.github.io',
  image: {
    domains: ['placehold.co'],
  },
  markdown: {
    processor: unified({
      remarkPlugins: [remarkVideoEmbed],
    }),
  },
});
