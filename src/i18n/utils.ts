import 'server-only';

import type { Locale } from './config';

const dictionaries = {
  ko: () => import('./ko.json').then((module) => module.default),
  en: () => import('./en.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.ko();
