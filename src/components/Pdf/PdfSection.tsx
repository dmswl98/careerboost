import { Text, View } from '@react-pdf/renderer';

import { tailwind } from './config';

type SectionTitle = '프로젝트' | '활동';

interface PdfSectionProps {
  title: SectionTitle;
}

const PdfSection = ({
  children,
  title,
}: StrictPropsWithChildren<PdfSectionProps>) => {
  return (
    <View style={tailwind('my-8 text-gray-500')}>
      <Text style={tailwind('mb-3 text-lg font-bold')}>{title}</Text>
      {children}
    </View>
  );
};

export default PdfSection;
