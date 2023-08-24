import { Document, Page, PDFViewer } from '@react-pdf/renderer';

import { tailwind } from '../Pdf/config';

const PdfProvider = ({ children }: StrictPropsWithChildren) => {
  return (
    <PDFViewer width="100%" height="650px">
      <Document>
        <Page size="A4" style={tailwind('font-regular')}>
          {children}
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PdfProvider;
