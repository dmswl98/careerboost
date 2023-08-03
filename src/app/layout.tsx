import './globals.css';

import type { Metadata } from 'next';

import { pretendard } from '@/styles/font';

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
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
