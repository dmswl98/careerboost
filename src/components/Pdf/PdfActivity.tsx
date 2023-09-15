import { View } from '@react-pdf/renderer';

import { type ActivitiesFormDataSchema } from '@/types/form';

import { tailwind } from './config';
import PdfMarkdown from './PdfMarkdown';
import PdfSection from './PdfSection';
import PdfSectionInfo from './PdfSectionInfo';

interface PdfActivityProps {
  activities: ActivitiesFormDataSchema['activities'];
}

const PdfActivity = ({ activities }: PdfActivityProps) => {
  return (
    <PdfSection title="활동">
      {activities.map((activity) => (
        <View
          key={activity.id}
          style={tailwind('border border-x-0 border-gray-200 py-6')}
        >
          <View style={tailwind('mb-4')}>
            <PdfSectionInfo
              title={activity.title}
              date={{ start: activity.startDate, end: activity.endDate }}
            />
          </View>
          {activity.content && <PdfMarkdown content={activity.content} />}
        </View>
      ))}
    </PdfSection>
  );
};

export default PdfActivity;
