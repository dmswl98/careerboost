import { PDFViewer } from '@react-pdf/renderer';
import { useFormContext } from 'react-hook-form';

import { type ResumeFormDataSchema } from '@/types/form';

import PdfDocument from './PdfDocument';

const PdfViewer = () => {
  const { getValues } = useFormContext<ResumeFormDataSchema>();
  return (
    <PDFViewer width="780px" height="800px" showToolbar={false}>
      <PdfDocument resume={getValues()} />
    </PDFViewer>
  );
};

export default PdfViewer;
