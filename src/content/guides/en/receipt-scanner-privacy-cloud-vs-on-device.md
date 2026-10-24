---
title: "Receipt scanner privacy: what happens to your data in cloud apps vs on-device apps"
description: Receipts reveal more about you than you might think. How cloud and on-device receipt scanners handle your data, and what to check before you choose one.
published: 2026-10-24
kicker: Privacy
---

A single supermarket receipt says a lot: where you shop and when, roughly where you live, how many people you feed, whether you buy baby food, alcohol, medication or pet food, and the last four digits of your card. A few months of receipts add up to a detailed picture of your life.

So it's worth knowing what a receipt-scanning app does with them.

## Two ways to read a receipt

Every receipt scanner has to turn a photo into text and then into structured data (store, items, prices, total). That reading happens in one of two places.

**In the cloud.** The app uploads the photo to the developer's servers or to a third-party text-recognition service, reads it there, and usually stores the result in an online account. This is common in expense apps built for businesses, where receipts need to reach an accountant or a finance team anyway.

**On the device.** The phone reads the receipt itself. Modern iPhones include fast on-device text recognition, and newer models can run language models locally too. The photo and the result can stay on the phone.

Neither approach is automatically good or bad. But they lead to very different answers to the questions below.

## Five questions to ask before you choose an app

1. **Where is the photo read?** Look in the privacy policy for words like "upload", "servers" or a named recognition provider. If the app works in flight mode, the reading is probably on the device.
2. **Where are the results stored?** In an online account, or only on your phone? An account means a copy of your spending history exists on someone else's computer.
3. **What does the App Store privacy label say?** On the App Store, scroll to "App Privacy". "Data Not Collected" means the developer says it collects nothing from the app. Labels such as "Data Linked to You" or "Data Used to Track You" list what is collected.
4. **Are there analytics or ads?** Advertising and analytics SDKs can send usage data to third parties even when receipts themselves stay private.
5. **Who else gets the data?** Rewards and cashback apps often share or sell purchase data to brands and market researchers; that's how they pay for the rewards. Read what you're agreeing to.

## The trade-offs

On-device apps can't do everything cloud apps can:

- **No automatic sync to the web** or to an accountant, unless you export.
- **Your data lives on your phone,** so you depend on your phone's backup. On iPhone, an iCloud or computer backup covers it.
- **Recognition depends on your device.** Older phones may be slower or less accurate.

Cloud apps, in turn, mean trusting a company with a long-term record of what you buy, and depending on that company staying in business and secure.

For **business expenses** that need to reach an accountant, a cloud service is often the practical choice. For **personal and household spending,** where the data is only for you, keeping it on your phone is hard to beat.

## How Sumsnapp handles it

We built [Sumsnapp](/en/) for the second case. Receipts are read on your iPhone with Apple's on-device text recognition and, where available, Apple Intelligence running on the device. Photos, items and spending stay in the app on your phone. There's no account, no analytics and no advertising, and the App Store privacy label is Data Not Collected.

The app only goes online to fetch exchange rates for receipts in another currency (sending just the currency codes and the date), to handle App Store purchases, and to let iOS download translation languages. The details are in our [Privacy Policy](/en/privacy-policy/).
