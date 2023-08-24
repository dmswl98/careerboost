import { Document, Page, PDFViewer } from '@react-pdf/renderer';
import { useFormContext } from 'react-hook-form';

import {
  useBlog,
  useBrief,
  useCareer,
  useEmail,
  useGithub,
  useName,
  usePhone,
} from '@/store/user';

import { ResumeFormSchema } from '../Providers/FormProvider';
import { tailwind } from './config';
import PdfActivity from './PdfActivity';
import PdfIntroduce from './PdfIntroduce';
import PdfProject from './PdfProject';

const PdfContent = () => {
  const name = useName();
  const career = useCareer();
  const brief = useBrief();
  const phone = usePhone();
  const email = useEmail();
  const blog = useBlog();
  const github = useGithub();

  const { getValues } = useFormContext<ResumeFormSchema>();

  return (
    <PDFViewer width="100%" height="650px">
      <Document>
        <Page size="A4" style={tailwind('font-regular')}>
          <PdfIntroduce
            userInfo={{ name, career, brief, phone, email, blog, github }}
          />
          <PdfProject projects={getValues('projects')} />
          <PdfActivity activities={getValues('activities')} />
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PdfContent;
