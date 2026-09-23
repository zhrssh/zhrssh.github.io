// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';
import remarkVideoEmbed from './src/plugins/remarkVideoEmbed.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://zherishgalvin.com',
  image: {
    domains: ['placehold.co'],
  },
  integrations: [sitemap()],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkVideoEmbed],
    }),
  },
});
