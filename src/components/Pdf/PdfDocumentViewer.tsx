import { PDFViewer } from '@react-pdf/renderer';
import { useFormContext } from 'react-hook-form';

import { ResumeFormSchema } from '../Providers/FormProvider';
import PdfDocument from './PdfDocument';

const PdfDocumentViewer = () => {
  const { getValues } = useFormContext<ResumeFormSchema>();
  return (
    <PDFViewer width="100%" height="650px">
      <PdfDocument resume={getValues()} />
    </PDFViewer>
  );
};

export default PdfDocumentViewer;
