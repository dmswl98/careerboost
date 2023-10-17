import { Text, View } from '@react-pdf/renderer';

import { type MENU_INFO } from '@/constants/menu';

import { tailwind } from './config';

type ExtractTitle<T> = T extends { TITLE: infer U } ? U : never;

type SectionTitle = ExtractTitle<(typeof MENU_INFO)[keyof typeof MENU_INFO]>;

interface PdfSectionProps {
  title: SectionTitle;
}

const PdfSection = ({
  children,
  title,
}: StrictPropsWithChildren<PdfSectionProps>) => {
  return (
    <View style={tailwind('my-8 text-black')}>
      <Text style={tailwind('mb-3 pr-24 text-lg font-bold')}>{title}</Text>
      {children}
    </View>
  );
};

export default PdfSection;
