// Content and timing for the five home-page animations. The markup renders the final frame
// (what visitors without JavaScript or with reduced motion see); src/scripts/anims.ts plays them.
import type { CatKey } from './categories';

export const eur = (v: number) => '€' + v.toFixed(2);

export const HERO: { raw: string; amt: string; name: string; sub: string; v: number; cat: CatKey; disc?: [string, string, string] }[] = [
  { raw: 'VOLLMILCH 3,5% 1L', amt: '1,19', name: 'Whole Milk 1L', sub: '1 × €1.19', v: 1.19, cat: 'groc' },
  { raw: 'BANANEN LOSE', amt: '1,43', name: 'Bananas', sub: '0.812 kg × €1.76/kg', v: 1.43, cat: 'groc' },
  { raw: 'ROGGENBROT 750G', amt: '2,49', name: 'Rye Bread 750g', sub: '1 × €2.49', v: 2.49, cat: 'groc' },
  { raw: 'KAFFEE CREMA 1KG', amt: '12,99', name: 'Coffee Beans 1kg', sub: '1 × €12.99', v: 12.99, cat: 'groc', disc: ['  RABATT KAFFEE', '-2,00', '−€2.00'] },
  { raw: 'SPUELMITTEL 500ML', amt: '1,15', name: 'Dish Soap 500ml', sub: '1 × €1.15', v: 1.15, cat: 'home' },
  { raw: 'ZAHNPASTA 75ML', amt: '0,95', name: 'Toothpaste 75ml', sub: '1 × €0.95', v: 0.95, cat: 'care' },
  { raw: 'KATZENFUTTER 85G', amt: '1,96', name: 'Cat Food 85g', sub: '4 × €0.49', v: 1.96, cat: 'pets' },
];
export const HERO_TOTAL = 20.16;

/** Receipt paper lines (items and their discount lines), and each item's first paper line. */
export const PAPER: { raw: string; amt: string }[] = [];
export const FIRST: number[] = [];
HERO.forEach((h, i) => {
  FIRST[i] = PAPER.length;
  PAPER.push({ raw: h.raw, amt: h.amt });
  if (h.disc) PAPER.push({ raw: h.disc[0], amt: h.disc[1] });
});

export const S2: [string, string, string, CatKey, string][] = [
  ['MILCH 1,5% 1L', '0,99', 'Milk 1.5% 1L', 'groc', '€0.99'],
  ['AEPFEL BRAEBURN', '2,31', 'Braeburn Apples', 'groc', '€2.31'],
  ['SPUELTABS 40ST', '4,95', 'Dishwasher Tabs ×40', 'home', '€4.95'],
  ['ZAHNBUERSTE', '1,75', 'Toothbrush', 'care', '€1.75'],
  ['WINDELN GR.4', '9,99', 'Nappies Size 4', 'kids', '€9.99'],
];
export const S3: [CatKey, number][] = [['groc', 198.4], ['dine', 64.2], ['home', 38.9], ['kids', 34.97]];
export const S3_TOTAL = 412.8;
export const STUBS = ['92%', '70%', '84%', '60%', '90%', '74%', '80%', '66%', '88%', '72%', '94%', '58%'];

export const STORE: Record<string, string> = { Lidl: '#4F7AA8', Edeka: '#B8861C', REWE: '#C0504A' };
export const MILK: [number, string][] = [
  [1.15, 'Lidl'], [1.29, 'Edeka'], [1.19, 'Lidl'], [1.39, 'REWE'], [1.09, 'Lidl'], [1.35, 'Edeka'],
  [1.19, 'Lidl'], [1.45, 'REWE'], [1.15, 'Lidl'], [1.29, 'Edeka'], [1.19, 'Lidl'], [1.49, 'REWE'],
];
const LO = 1.02, HI = 1.56;
/** Chart points in a 0–100 box. */
export const MILK_PTS = MILK.map(([p], i) => [(i / (MILK.length - 1)) * 100, ((HI - p) / (HI - LO)) * 100]);
export const ITEM_STATS = [['Spent', '€15.22'], ['Bought', '12×'], ['Average', '€1.27'], ['Last', '€1.49']];
export const ITEM_STORES: [string, string][] = [['Lidl', '€1.16'], ['Edeka', '€1.31'], ['REWE', '€1.44']];

export const Q = 'How much on coffee last month?';
export const ASK: [string, string, string, string][] = [
  ['Coffee Beans 1kg', '2×', '€23.98', '#4F8A5B'],
  ['Flat White', '3×', '€10.80', '#B36A35'],
  ['Cold Brew 330ml', '1×', '€3.62', '#B36A35'],
];
export const ASK_TOTAL = 38.4;

export const LANGR = [
  { raw: 'VOLLMILCH 3,5% 1L', store: 'REWE · Berlin', tr: 'whole milk', amt: '€1.49' },
  { raw: 'LAIT DEMI-ÉCRÉMÉ 1L', store: 'Carrefour · Lyon', tr: 'semi-skimmed milk', amt: '€1.09' },
  { raw: 'LATTE INTERO 1L', store: 'Esselunga · Milano', tr: 'whole milk', amt: '€1.35' },
  { raw: 'LECHE ENTERA 1L', store: 'Mercadona · Valencia', tr: 'whole milk', amt: '€0.96' },
];
export const FX: [string, string, string, string, string][] = [
  ['M', '#B36A35', 'Migros · Zürich', 'CHF 23.40', '€24.95'],
  ['T', '#4F7AA8', 'Tesco · London', '£18.20', '€21.31'],
  ['T', '#C0504A', 'Target · Chicago', '$31.75', '€27.36'],
];

/** Frames per loop (120 ms each) and the frame shown when not animating. */
export const LEN = { hero: 80, steps: 90, item: 72, ask: 84, lang: 70 };
export const END = { hero: 60, steps: 70, item: 50, ask: 62, lang: 56 };
