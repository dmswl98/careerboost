/* eslint-disable jsx-a11y/alt-text */
import { View } from '@react-pdf/renderer';

import { MENU_INFO } from '@/constants/menu';
import { type ProjectsFormDataSchema } from '@/types/form';

import { tailwind } from './config';
import PdfLink from './PdfLink';
import PdfMarkdown from './PdfMarkdown';
import PdfSection from './PdfSection';
import PdfSectionInfo from './PdfSectionInfo';

interface PdfProjectProps {
  projects: ProjectsFormDataSchema['projects'];
}

const PdfProject = ({ projects }: PdfProjectProps) => {
  return (
    <PdfSection title={MENU_INFO.PROJECT.TITLE}>
      {projects.map((project) => (
        <View
          key={project.id}
          style={tailwind(
            'flex-row border border-x-0 border-gray-200 py-6 px-2'
          )}
        >
          <PdfSectionInfo
            title={project.title}
            date={{ start: project.startDate, end: project.endDate }}
          >
            {project.githubUrl && (
              <PdfLink label="GitHub 링크" url={project.githubUrl} />
            )}
            {project.serviceUrl && (
              <PdfLink label="배포 링크" url={project.serviceUrl} />
            )}
          </PdfSectionInfo>
          {project.content && <PdfMarkdown content={project.content} />}
        </View>
      ))}
    </PdfSection>
  );
};

export default PdfProject;
