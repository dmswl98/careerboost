import { Text, View } from '@react-pdf/renderer';
import { type PropsWithChildren } from 'react';

import { tailwind } from './config';

interface Date {
  start: string;
  end?: string;
}

interface PdfSectionInfoProps {
  title: string;
  date: Date;
}

const PdfSectionInfo = ({
  children,
  title,
  date,
}: PropsWithChildren<PdfSectionInfoProps>) => {
  return (
    <View style={tailwind('w-[200px] flex-col pr-6')}>
      <Text style={tailwind('mb-1 text-lg font-semiBold')}>{title}</Text>
      <Text style={tailwind('mb-3 text-xs')}>
        {date.start} ~ {date.end}
      </Text>
      {children}
    </View>
  );
};

export default PdfSectionInfo;
