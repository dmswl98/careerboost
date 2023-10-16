import { type i18n } from './config';
import type * as dictionary from './ko.json';

export type Locale = (typeof i18n)['locales'][number];

export interface LangParams {
  params: { lang: Locale };
}

export type Dictionary = typeof dictionary;
