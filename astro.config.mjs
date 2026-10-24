// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';
import remarkVideoEmbed from './src/plugins/remarkVideoEmbed.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://zherishgalvin.com',
  trailingSlash: 'always',
  // Archived projects (demos, personal tools, superseded versions) send old links to the list
  redirects: Object.fromEntries(
    [
      'spa-booking-demo',
      'spa-email-outreach',
      'telegram-assistant',
      'messenger-chatbot',
      'reddit-rag',
      'propresenter-lyrics-formatter',
      'cobot-project',
    ].map((id) => [`/projects/${id}/`, '/projects/']),
  ),
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
