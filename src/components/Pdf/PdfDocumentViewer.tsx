import { PDFViewer } from '@react-pdf/renderer';
import { useFormContext } from 'react-hook-form';

import { type ResumeFormDataSchema } from '@/types/form';

import PdfDocument from './PdfDocument';

const PdfDocumentViewer = () => {
  const { getValues } = useFormContext<ResumeFormDataSchema>();
  return (
    <PDFViewer width="100%" height="650px" showToolbar={false}>
      <PdfDocument resume={getValues()} />
    </PDFViewer>
  );
};

export default PdfDocumentViewer;
