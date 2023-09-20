'use client';

import dynamic from 'next/dynamic';

const PdfViewer = dynamic(() => import('../../../components/Pdf/PdfViewer'), {
  ssr: false,
});

const Page = () => {
  return <PdfViewer />;
};

export default Page;
