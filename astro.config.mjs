// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// Languages with pages; keep in sync with `locales` in src/config.ts.
const locales = ['en'];

// https://astro.build/config
export default defineConfig({
  site: 'https://sumsnapp.com',
  trailingSlash: 'always',
  // Scoped styles reach elements inside child components (e.g. Icon), via a class rather than an attribute.
  scopedStyleStrategy: 'class',
  // One URL per language (/en/, /de/, …); English is the default.
  i18n: {
    locales,
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  integrations: [
    sitemap({
      // "/" only redirects to /en/, so it stays out of the sitemap.
      filter: (page) => page !== 'https://sumsnapp.com/',
      i18n: { defaultLocale: 'en', locales: Object.fromEntries(locales.map((l) => [l, l])) },
    }),
  ],
});
