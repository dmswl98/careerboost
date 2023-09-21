import { PDFViewer as PDFDocumentViewer } from '@react-pdf/renderer';
import { useFormContext } from 'react-hook-form';

import { type ResumeFormDataSchema } from '@/types/form';

import PdfDocument from './PdfDocument';

const PdfViewer = () => {
  const { getValues } = useFormContext<ResumeFormDataSchema>();

  return (
    <PDFDocumentViewer width="100%" height="800px" showToolbar={false}>
      <PdfDocument resume={getValues()} />
    </PDFDocumentViewer>
  );
};

export default PdfViewer;
