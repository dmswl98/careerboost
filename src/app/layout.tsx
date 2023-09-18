import '../styles/globals.css';

import type { Metadata } from 'next';

import { GoogleAnalytics, Hotjar } from '@/components/Analytics';
import Navigation from '@/components/Layout/Navigation';
import META from '@/constants/meta';
import { pretendard, sourceCode } from '@/styles/font';

export const metadata: Metadata = {
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

export default function RootLayout({ children }: StrictPropsWithChildren) {
  return (
    <html lang="ko">
      <body className={`${pretendard.className} ${sourceCode.variable}`}>
        <Navigation />
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
