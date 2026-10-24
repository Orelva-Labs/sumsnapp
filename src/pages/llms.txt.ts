import type { APIRoute } from 'astro';
import { site } from '../config';
import { FAQ } from '../data/faq';
import { CAT } from '../data/categories';

// A plain-text summary for AI assistants, built from the same facts as the page.
export const GET: APIRoute = () => {
  const text = `# Sumsnapp

> Sumsnapp is an iPhone app that scans receipts and turns them into an item-level spending history. It reads every line on the device, needs no account or bank connection, and its App Store privacy label is Data Not Collected.

## Facts
- Platform: iPhone, iOS ${site.minIOS} or later. Apple Intelligence features need iPhone 15 Pro or later.
- Reads: paper receipts, photos, screenshots and PDF e-receipts, in many languages and currencies.
- Extracts: store, date, items, quantity, unit price, weight, discounts, tax and total; checks the lines add up to the printed total.
- Categories (12): ${Object.values(CAT).map((c) => c[0]).join(', ')}.
- Insights: spending by week, month, 3 months, year or custom range; by category, top items and store.
- Ask in plain words: "How much did I spend on coffee last month?" answered from your receipts.
- Price alerts (Pro): flags items that cost more than you usually pay, and where they were cheaper.
- Privacy: receipts are read on the iPhone and never uploaded. No account, no ads, no analytics. The app only goes online for exchange rates (currency codes and dates), App Store purchases and Apple's language downloads.
- App language: English. It reads receipts in any language.

## Pricing
- Free: ${site.free.scans} scans and ${site.free.questions} questions a month, insights for the last ${site.free.months} months.
- Sumsnapp Pro: ${site.price.monthly} a month or ${site.price.yearly} a year (1-week free trial on the yearly plan, Family Sharing). Unlimited scans and questions, full history, price alerts and history, CSV export, app lock. Prices vary by country.

## FAQ
${FAQ.map(([q, a]) => `### ${q}\n${a}`).join('\n\n')}

## Links
- Home: ${site.url}/en/
- Help and support: ${site.url}/en/support/
- Guides: ${site.url}/en/guides/
- Privacy Policy: ${site.url}/en/privacy-policy/
- Press kit: ${site.url}/en/press/
- Contact: ${site.supportEmail}
`;
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
