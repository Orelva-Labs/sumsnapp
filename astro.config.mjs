// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

const locales = ['en', 'de', 'fr', 'es', 'it'];

// https://astro.build/config
export default defineConfig({
  site: 'https://sumsnapp.com',
  trailingSlash: 'always',
  // One URL per language (/en/, /de/, …); English is the default.
  i18n: {
    locales,
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: true },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: Object.fromEntries(locales.map((l) => [l, l])) },
    }),
  ],
});
