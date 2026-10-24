// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import { legalIncomplete } from './src/config.ts';

// Languages with pages; keep in sync with `locales` in src/config.ts.
const locales = ['en'];

// https://astro.build/config
export default defineConfig({
  site: 'https://www.sumsnapp.com',
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
      // Legal pages stay out while their publisher details are missing (they're noindex then too).
      filter: (page) =>
        page !== 'https://www.sumsnapp.com/' &&
        !(legalIncomplete() && /\/(privacy-policy|terms|impressum)\/$/.test(page)),
      i18n: { defaultLocale: 'en', locales: Object.fromEntries(locales.map((l) => [l, l])) },
    }),
  ],
});
