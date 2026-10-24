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

/**
 * The publisher, for the Impressum, Privacy Policy and Terms. Orelva Labs is an Einzelunternehmen,
 * so the owner's full name and a postal address (no PO box) must be shown.
 */
export const legal = {
  business: 'Orelva Labs',
  owner: 'Eugene Asiedu',
  /** TODO: add the house number; the Impressum needs a complete postal address. */
  street: 'Hermann-Ehlers-Straße',
  postcode: '26386',
  city: 'Wilhelmshaven',
  country: 'Germany',
  phone: '+49 178 5629752',
  email: 'hello@sumsnapp.com',
  /** The data protection authority of the federal state the business is registered in. */
  authority: { name: 'Die Landesbeauftragte für den Datenschutz Niedersachsen', url: 'https://www.lfd.niedersachsen.de' },
  /** Date the legal texts were last changed (YYYY-MM-DD). */
  updated: '2026-10-24',
};

/** True until every detail the Impressum needs is filled in; the legal pages then stay out of search. */
export const legalIncomplete = () => !legal.owner || !legal.street || !legal.postcode || !legal.city || !legal.phone;

export const launched = () => site.appStoreUrl !== '';

/** Languages with a translated home page. Others are added when a native-reviewed translation exists. */
export const locales = ['en'] as const;
export type Locale = (typeof locales)[number];

export const languageNames: Record<string, string> = {
  en: 'English', de: 'Deutsch', fr: 'Français', es: 'Español', it: 'Italiano',
};
