import '../../styles/globals.css';

import type { Metadata } from 'next';

import { GoogleAnalytics, Hotjar } from '@/components/Analytics';
import Navigation from '@/components/Layout/Navigation';
import { METADATA, METADATA_KO } from '@/constants/meta';
import { i18n } from '@/i18n/config';
import { type LangParams } from '@/i18n/types';
import { pretendard, sourceCode } from '@/styles/font';

export const metadata: Metadata = {
  ...METADATA_KO,
  metadataBase: new URL('https://careerboost-bmt142ael-dmswl98.vercel.app'),
  creator: METADATA.CREATOR,
  generator: METADATA.GENERATOR,
  viewport: METADATA.VIEWPORT,
};

export default async function RootLayout({
  children,
  params,
}: StrictPropsWithChildren<LangParams>) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body className={`${pretendard.className} ${sourceCode.variable}`}>
        <Navigation lang={lang} />
        {children}
        {process.env.NODE_ENV === 'production' && (
          <>
            <GoogleAnalytics />
            <Hotjar />
          </>
        )}
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
