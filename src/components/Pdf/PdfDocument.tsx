import { Document, Link, Page, Text } from '@react-pdf/renderer';

import { type ResumeFormDataSchema } from '@/types/form';

import { tailwind } from './config';
import PdfActivity from './PdfActivity';
import PdfExperience from './PdfExperience';
import PdfProject from './PdfProject';
import PdfUserInfo from './PdfUserInfo';

interface PdfDocumentProps {
  resume: ResumeFormDataSchema;
}

const PdfDocument = ({ resume }: PdfDocumentProps) => {
  return (
    <Document>
      <Page size="A4" style={tailwind('font-regular px-8 pt-10 pb-14')} wrap>
        <PdfUserInfo userInfo={resume.userInfo} />
        {resume.experiences[0] && resume.experiences[0].company && (
          <PdfExperience experiences={resume.experiences} />
        )}
        {resume.projects[0] && resume.projects[0].title && (
          <PdfProject projects={resume.projects} />
        )}
        {resume.activities[0] && resume.activities[0].title && (
          <PdfActivity activities={resume.activities} />
        )}
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
