import { Document, Link, Page, PDFViewer, Text } from '@react-pdf/renderer';
import { useFormContext } from 'react-hook-form';

import { ResumeFormSchema } from '../Providers/FormProvider';
import { tailwind } from './config';
import PdfActivity from './PdfActivity';
import PdfIntroduce from './PdfIntroduce';
import PdfProject from './PdfProject';

const PdfContent = () => {
  const { getValues } = useFormContext<ResumeFormSchema>();

  return (
    <PDFViewer width="100%" height="650px">
      <Document>
        <Page size="A4" style={tailwind('font-regular px-8 pt-10 pb-14')} wrap>
          <PdfIntroduce userInfo={getValues('userInfo')} />
          <PdfProject projects={getValues('projects')} />
          <PdfActivity activities={getValues('activities')} />
          <Link
            src="https://github.com/dmswl98"
            style={tailwind('absolute bottom-4 left-0 right-0 text-center')}
            fixed
          >
            <Text style={tailwind('text-slate-300 text-xs')}>@dmswl98</Text>
          </Link>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PdfContent;
