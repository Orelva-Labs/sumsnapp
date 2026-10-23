import { site } from '../config';

// Phrased the way people search, with a direct first-sentence answer (also published as FAQPage JSON-LD).
export const FAQ: [string, string][] = [
  ['How can I see how much I spend on groceries each month?', 'Scan your grocery receipts with Sumsnapp. It sorts every item into a category, such as Groceries with aisles like Dairy and Produce, and shows your spending by week, month, 3 months, year or a custom range, with the change from the period before.'],
  ["Is there a receipt scanner that doesn't upload my data?", "Yes. Sumsnapp reads receipts on your iPhone with Apple's on-device text recognition. Receipt photos and items are never uploaded, there is no account, and the App Store privacy label is Data Not Collected."],
  ['Which app tracks prices of individual items I buy?', 'Sumsnapp keeps every line of every receipt. Open an item, like milk, to see the total spent, times bought, and its average and last price. With Pro, you also get its price history across stores and an alert on the receipt when you paid more than usual.'],
  ['Can I track spending without linking my bank account?', 'Yes. Sumsnapp works only from your receipts. There is no bank connection and no sign-up.'],
  ['Which receipts can Sumsnapp read?', "Supermarket, café, pharmacy and fuel receipts, as photos, screenshots or PDF e-receipts, in many languages and currencies. Foreign-currency receipts are converted at the day's rate."],
  ['How much does Sumsnapp cost?', `Sumsnapp is free for ${site.free.scans} scans and ${site.free.questions} questions a month, with insights for the last ${site.free.months} months. Sumsnapp Pro is ${site.price.monthly} a month or ${site.price.yearly} a year, with a 1-week free trial on the yearly plan. Prices vary by country.`],
  ['Which iPhones does it work on?', `Any iPhone with iOS ${site.minIOS} or later. Features that use Apple Intelligence need iPhone 15 Pro or later.`],
  ['Is the app available in my language?', 'The app is in English for now. It reads receipts in any language.'],
];
