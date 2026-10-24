// Facts that appear on the site, kept in one place so the page, JSON-LD and llms.txt never disagree.
export const site = {
  name: 'Sumsnapp',
  url: 'https://www.sumsnapp.com',
  /** Empty until the app is on the App Store; the site then shows a "coming soon" state. */
  appStoreUrl: '',
  /** Double opt-in signup endpoint for "Get notified" (prelaunch). Empty hides the form. */
  notifyEndpoint: '',
  supportEmail: 'hello@sumsnapp.com',
  city: '',
  minIOS: '18',
  price: { monthly: '$3.99', yearly: '$29.99', yearlyPerMonth: '$2.50', currency: 'USD' },
  free: { scans: 10, questions: 3, months: 3 },
};

export const launched = () => site.appStoreUrl !== '';

/** Languages with a translated home page. Others are added when a native-reviewed translation exists. */
export const locales = ['en'] as const;
export type Locale = (typeof locales)[number];

export const languageNames: Record<string, string> = {
  en: 'English', de: 'Deutsch', fr: 'Français', es: 'Español', it: 'Italiano',
};
