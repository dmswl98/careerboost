import { Text, View } from '@react-pdf/renderer';

import { MENU_INFO } from '@/constants/menu';
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
    <PdfSection title={MENU_INFO.ACTIVITY.TITLE}>
      {activities.map((activity) => (
        <View
          key={activity.id}
          style={tailwind(
            'flex-row border border-x-0 border-gray-200 py-6 px-2'
          )}
        >
          <PdfSectionInfo
            title={activity.title}
            date={{ start: activity.startDate, end: activity.endDate }}
          >
            {activity.institution && (
              <Text style={tailwind('text-sm font-semiBold')}>
                {activity.institution}
              </Text>
            )}
          </PdfSectionInfo>
          {activity.content && <PdfMarkdown content={activity.content} />}
        </View>
      ))}
    </PdfSection>
  );
};

export default PdfActivity;
