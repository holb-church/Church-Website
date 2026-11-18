import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/site.config.mjs';

export default defineConfig({
  site: site.url,
  redirects: { '/sermons': '/teachings' },
  integrations: [sitemap({ filter: (page) => !/\/(thanks|sermons)\/?$/.test(page) && (site.giveUrl || !page.includes('/give')) })],
});
