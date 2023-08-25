import { Text, View } from '@react-pdf/renderer';

import { tailwind } from './config';

interface Date {
  start: string;
  end?: string;
}

interface PdfSectionInfoProps {
  title: string;
  date: Date;
}

const PdfSectionInfo = ({ title, date }: PdfSectionInfoProps) => {
  return (
    <View style={tailwind('flex-row items-center justify-between mb-2')}>
      <Text style={tailwind('text-[11px] font-semiBold')}>{title}</Text>
      <Text style={tailwind('text-xs mb-2')}>
        {date.start} ~ {date.end}
      </Text>
    </View>
  );
};

export default PdfSectionInfo;
