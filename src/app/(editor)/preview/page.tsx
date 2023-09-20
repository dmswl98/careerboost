'use client';

import dynamic from 'next/dynamic';

import { Skeleton } from '@/components/common';

const PdfViewer = dynamic(() => import('../../../components/Pdf/PdfViewer'), {
  ssr: false,
  loading: () => <Skeleton className="h-[800px] w-[780px]" />,
});

const Page = () => {
  return <PdfViewer />;
};

export default Page;
