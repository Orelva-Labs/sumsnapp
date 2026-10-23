/** The app's 12 categories: name, colour and icon, as in the iOS app. */
export const CAT = {
  groc: ['Groceries', '#4F8A5B', 'shopping_basket'],
  dine: ['Dining & Coffee', '#B36A35', 'local_cafe'],
  home: ['Household', '#4F7AA8', 'cottage'],
  care: ['Personal Care', '#A0609A', 'spa'],
  health: ['Health & Pharmacy', '#C0504A', 'medication'],
  kids: ['Baby & Kids', '#B8861C', 'child_care'],
  pets: ['Pets', '#8A6A4A', 'pets'],
  fuel: ['Transport & Fuel', '#2F8790', 'local_gas_station'],
  cloth: ['Clothing', '#6A5FB0', 'apparel'],
  tech: ['Electronics', '#5B6675', 'devices'],
  fun: ['Entertainment', '#C25A80', 'confirmation_number'],
  other: ['Other', '#8C8C91', 'category'],
} as const;

export type CatKey = keyof typeof CAT;
export const cat = (k: CatKey) => ({ name: CAT[k][0], color: CAT[k][1], icon: CAT[k][2] });
