import '../../styles/globals.css';

import type { Metadata } from 'next';

import { GoogleAnalytics, Hotjar } from '@/components/Analytics';
import Navigation from '@/components/Layout/Navigation';
import META from '@/constants/meta';
import { i18n } from '@/i18n/config';
import { type LangParams } from '@/i18n/types';
import { pretendard, sourceCode } from '@/styles/font';

export const metadata: Metadata = {
  metadataBase: new URL('https://careerboost-bmt142ael-dmswl98.vercel.app'),
  title: META.TITLE,
  description: META.DESCRIPTION,
  keywords: [...META.KEYWORD],
  openGraph: {
    title: META.TITLE,
    description: META.DESCRIPTION,
    siteName: META.SITE_NAME,
    locale: META.LOCALE,
    type: META.TYPE,
    url: META.URL,
  },
  creator: META.CREATOR,
  generator: META.GENERATOR,
  viewport: META.VIEWPORT,
  twitter: {
    title: META.TITLE,
    description: META.DESCRIPTION,
  },
};

export default function RootLayout({
  children,
  params,
}: StrictPropsWithChildren<LangParams>) {
  return (
    <html lang={params.lang}>
      <body className={`${pretendard.className} ${sourceCode.variable}`}>
        <Navigation lang={params.lang} />
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
