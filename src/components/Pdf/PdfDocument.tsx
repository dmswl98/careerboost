import { Document, Link, Page, Text } from '@react-pdf/renderer';

import { type ResumeFormSchema } from '../Providers/FormProvider';
import { tailwind } from './config';
import PdfActivity from './PdfActivity';
import PdfIntroduce from './PdfIntroduce';
import PdfProject from './PdfProject';

interface PdfDocumentProps {
  resume: ResumeFormSchema;
}

const PdfDocument = ({ resume }: PdfDocumentProps) => {
  return (
    <Document>
      <Page size="A4" style={tailwind('font-regular px-8 pt-10 pb-14')} wrap>
        <PdfIntroduce userInfo={resume.userInfo} />
        <PdfProject projects={resume.projects} />
        <PdfActivity activities={resume.activities} />
        <Link
          src="https://github.com/dmswl98"
          style={tailwind('absolute bottom-4 left-0 right-0 text-center')}
          fixed
        >
          <Text style={tailwind('text-gray-300 text-xs')}>@dmswl98</Text>
        </Link>
      </Page>
    </Document>
  );
};

export default PdfDocument;
