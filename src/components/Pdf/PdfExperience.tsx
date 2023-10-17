import { Text, View } from '@react-pdf/renderer';

import { MENU_INFO } from '@/constants/menu';
import { type ExperienceFormDataSchema } from '@/types/form';

import { tailwind } from './config';
import PdfMarkdown from './PdfMarkdown';
import PdfSection from './PdfSection';
import PdfSectionInfo from './PdfSectionInfo';

interface PdfExperienceProps {
  experiences: ExperienceFormDataSchema['experiences'];
}

const PdfExperience = ({ experiences }: PdfExperienceProps) => {
  return (
    <PdfSection title={MENU_INFO.EXPERIENCE.TITLE}>
      {experiences.map((experience) => (
        <View
          key={experience.id}
          style={tailwind(
            'flex-row border border-x-0 border-gray-200 py-6 px-2'
          )}
        >
          <PdfSectionInfo
            title={experience.company}
            date={{ start: experience.startDate, end: experience.endDate }}
          >
            <View style={tailwind('text-sm font-semiBold leading-normal')}>
              <Text>{experience.employmentType}</Text>
              <Text>{experience.jobTitle}</Text>
            </View>
          </PdfSectionInfo>
          {experience.content && <PdfMarkdown content={experience.content} />}
        </View>
      ))}
    </PdfSection>
  );
};

export default PdfExperience;
