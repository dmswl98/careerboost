import { Text, View } from '@react-pdf/renderer';

import { type UserInfoFormDataSchema } from '@/types/form';

import { tailwind } from './config';
import PdfLink from './PdfLink';

interface PdfUserInfoProps {
  userInfo: UserInfoFormDataSchema['userInfo'];
}

const PdfUserInfo = ({ userInfo }: PdfUserInfoProps) => {
  return (
    <View style={tailwind('mb-6 text-black')}>
      {userInfo.name && (
        <Text style={tailwind('mr-4 mb-8 text-3xl font-bold leading-none')}>
          {userInfo.name}
        </Text>
      )}
      {userInfo.career && (
        <Text style={tailwind('mb-4 text-lg font-semiBold leading-none')}>
          {userInfo.career}
        </Text>
      )}
      <View style={tailwind('w-10 mb-4 border-b border-black')} />
      <View style={tailwind('flex-row gap-3 text-sm')}>
        {userInfo.phone && <Text>{userInfo.phone}</Text>}
        {userInfo.email && <Text>{userInfo.email}</Text>}
        {userInfo.blog && <PdfLink label="Blog" url={userInfo.blog} />}
        {userInfo.github && <PdfLink label="GitHub" url={userInfo.github} />}
      </View>
      {userInfo.brief && (
        <Text style={tailwind('mt-3 text-sm leading-normal')}>
          {userInfo.brief}
        </Text>
      )}
    </View>
  );
};

export default PdfUserInfo;
