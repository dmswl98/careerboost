import './globals.css';

import type { Metadata } from 'next';

import { pretendard, sourceCode } from '@/styles/font';
import ReactQueryProvider from '@/components/Providers/ReactQueryProvider';

export const metadata: Metadata = {
  title: 'Resume with AI',
  description: 'Corrected by AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${pretendard.className} ${sourceCode.variable}`}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
