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
      <Page size="A4" style={tailwind('font-regular px-14 pt-14 pb-16')} wrap>
        <PdfUserInfo userInfo={resume.userInfo} />
        {resume.experiences.length > 0 && (
          <PdfExperience experiences={resume.experiences} />
        )}
        {resume.projects.length > 0 && (
          <PdfProject projects={resume.projects} />
        )}
        {resume.activities.length > 0 && (
          <PdfActivity activities={resume.activities} />
        )}
        <Link
          src="https://github.com/dmswl98"
          style={tailwind('absolute bottom-4 left-0 right-0 mt-10 text-center')}
          fixed
        >
          <Text style={tailwind('text-gray-300 text-xs')}>
            Powered by careerBoost
          </Text>
        </Link>
      </Page>
    </Document>
  );
};

export default PdfDocument;
