/* eslint-disable jsx-a11y/alt-text */
import { View } from '@react-pdf/renderer';

import { ProjectsFormSchema } from '../Form/ProjectForm';
import { tailwind } from './config';
import PdfLink from './PdfLink';
import PdfMarkdown from './PdfMarkdown';
import PdfSection from './PdfSection';
import PdfSectionInfo from './PdfSectionInfo';

interface PdfProjectProps {
  projects: ProjectsFormSchema['projects'];
}

const PdfProject = ({ projects }: PdfProjectProps) => {
  return (
    <PdfSection title="프로젝트">
      {projects.map((project) => (
        <View
          key={project.id}
          style={tailwind('border border-x-0 border-gray-200 py-6')}
        >
          <View style={tailwind('mb-4')}>
            <PdfSectionInfo
              title={project.title}
              date={{ start: project.startDate, end: project.endDate }}
            />
            {project.url && <PdfLink url={project.url} />}
          </View>
          {project.content && <PdfMarkdown content={project.content} />}
        </View>
      ))}
    </PdfSection>
  );
};

export default PdfProject;
