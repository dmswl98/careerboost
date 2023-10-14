export const i18n = {
  defaultLocale: 'ko',
  locales: ['ko', 'en'],
} as const;

export type Locale = (typeof i18n)['locales'][number];

export interface LangParams {
  params: { lang: Locale };
}
