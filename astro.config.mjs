import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.refx.kr',
  output: 'static',
  integrations: [
    tailwind(),
    sitemap()
  ],
  build: {
    assets: '_astro'
  }
});