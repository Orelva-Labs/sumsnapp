import { site, legal } from '../config';

export type Topic = { id: string; title: string; items: [string, string][] };

// Answers describe the app's real screens and labels; keep them in step with the iOS app.
export const SUPPORT: Topic[] = [
  {
    id: 'start',
    title: 'Getting started',
    items: [
      ['How do I scan my first receipt?', 'Open Sumsnapp. It opens straight to the camera. Hold the receipt flat in good light and keep it in frame: with Auto on, Sumsnapp captures it as soon as it is steady. You can also tap the shutter yourself, or tap the upload button to pick a photo, screenshot or PDF.'],
      ['Do I need an account?', 'No. There is no sign-up and no login. Your receipts are stored in the app on your iPhone.'],
      ['Which iPhones are supported?', `Any iPhone with iOS ${site.minIOS} or later. Reading receipts with Apple Intelligence, and some name clean-ups, need an iPhone 15 Pro or later with Apple Intelligence turned on. Without it, Sumsnapp still reads receipts with Apple's text recognition.`],
      ['Is the app in my language?', 'The app is in English for now. It reads receipts in many languages and currencies, and search finds items across languages, so “milk” also finds “Vollmilch” or “lait”.'],
    ],
  },
  {
    id: 'scanning',
    title: 'Scanning receipts',
    items: [
      ['How do I scan a long receipt?', 'Tap Long receipt above the camera, then take one photo per section from top to bottom, overlapping a little. When you have the whole receipt, tap the green checkmark (it shows how many parts you took), and Sumsnapp joins them into one receipt.'],
      ['The total doesn’t match the receipt. What do I do?', 'Sumsnapp checks that the item lines add up to the printed total. If they don’t, it shows how far off it is and highlights the lines it is unsure about. Tap a line to correct the name, quantity, price or category, or to split or delete it. Tap the receipt photo to compare with the original.'],
      ['A receipt wasn’t recognised. Why?', 'Usually the photo is blurry, cut off, crumpled or in poor light. Retake it flat and well lit with the whole receipt in frame, or use Long receipt for long ones. Bank slips, boarding passes and similar documents are not treated as purchases.'],
      ['Can I fix the category of an item?', 'Yes. Tap the item and pick a category. Turn on “Always categorise” to use that category for the same item on future receipts. You can rename, recolour or merge categories in Settings → Manage categories.'],
      ['The same product has different names at different stores. Can I combine them?', 'Yes. Open the item in Insights and use “Counted as this item” to merge similar lines, so they share one price history.'],
    ],
  },
  {
    id: 'insights',
    title: 'Insights and questions',
    items: [
      ['How do I see my spending?', 'Swipe up from the bottom of the camera screen to open Insights. Choose a week, month, 3 months, year or a custom range, and swipe to move between periods. Tap a category, an item or a store for details.'],
      ['How do I ask a question?', 'Open Insights and tap the search icon. Type a question such as “How much did I spend on coffee last month?” and tap Search. Questions about items, categories, stores or your total spending work best.'],
      ['How do receipts in another currency work?', 'Sumsnapp converts them into your currency at that day’s reference rate from the European Central Bank. You can change the receipt’s currency, or type your own rate, on the receipt screen.'],
    ],
  },
  {
    id: 'billing',
    title: 'Plans and billing',
    items: [
      ['What’s included for free?', `${site.free.scans} receipt scans and ${site.free.questions} questions a month, and insights for the last ${site.free.months} months. Scans and questions reset on the first of each month.`],
      ['What does Sumsnapp Pro add, and what does it cost?', `Unlimited scans and questions, your full history, price alerts and price history, CSV export and app lock. Pro costs ${site.price.monthly} a month or ${site.price.yearly} a year, with a 1-week free trial on the yearly plan. Prices vary by country and are shown in the app before you buy. Family Sharing is included.`],
      ['How do I cancel?', 'On your iPhone, open Settings → your name → Subscriptions → Sumsnapp, then Cancel Subscription. Or in Sumsnapp: Settings → Manage subscription. Cancel at least 24 hours before renewal; Pro stays active until the end of the period you paid for.'],
      ['How do I get a refund?', 'Purchases are made through Apple, so Apple handles refunds. Request one at reportaproblem.apple.com.'],
      ['I bought Pro but the app still shows Free.', 'In Sumsnapp, open Settings and tap Restore purchases while signed in with the Apple Account you bought with. If that doesn’t help, check the subscription is active in Settings → your name → Subscriptions.'],
    ],
  },
  {
    id: 'privacy',
    title: 'Privacy and your data',
    items: [
      ['Are my receipts uploaded anywhere?', 'No. Receipts are read and stored on your iPhone. Sumsnapp has no servers that store receipts, items or spending. Read the Privacy Policy for the details.'],
      ['How do I export my data?', 'With Pro, open Settings → Export CSV to share every item line as a spreadsheet file.'],
      ['How do I move my receipts to a new iPhone?', 'Your receipts are included in your iPhone’s backup. Restore the new iPhone from an iCloud or computer backup of the old one, and your receipts come with it.'],
      ['How do I delete my data?', 'Delete a receipt by swiping it left in Activity, or delete the app to remove everything. We hold no copy.'],
    ],
  },
];

export const contactNote = `Write to ${legal.email}. We usually reply within two working days.`;
