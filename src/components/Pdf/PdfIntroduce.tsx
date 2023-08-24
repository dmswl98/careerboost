/* eslint-disable jsx-a11y/alt-text */
import { Image, Link, Text, View } from '@react-pdf/renderer';

import { USER_INFO } from '@/constants/user';
import type { User } from '@/store/user';

import { tailwind } from './config';

interface PdfIntroduceProps {
  userInfo: User;
}

const PdfIntroduce = ({ userInfo }: PdfIntroduceProps) => {
  return (
    <View
      style={tailwind('flex justify-between bg-slate-100 p-8 text-slate-500')}
    >
      <View style={tailwind('flex-row')}>
        <Text style={tailwind('mr-4 text-2xl font-bold')}>
          {userInfo.name || USER_INFO.name}
        </Text>
        <Text style={tailwind('text-lg mt-1 font-semibold')}>
          {userInfo.career || USER_INFO.career}
        </Text>
      </View>
      <Text style={tailwind('mb-4 text-sm')}>
        {userInfo.brief || USER_INFO.brief}
      </Text>
      <View style={tailwind('flex-row gap-3 text-sm')}>
        <View style={tailwind('flex-row items-center')}>
          <Image style={tailwind('w-4 mr-2')} src={'/icons/phone.png'} />
          <Text>{userInfo.phone || USER_INFO.phone}</Text>
        </View>
        <View style={tailwind('flex-row items-center')}>
          <Image style={tailwind('w-4 mr-2')} src={'/icons/mail.png'} />
          <Text>{userInfo.email || USER_INFO.email}</Text>
        </View>
        {userInfo.blog && (
          <Link src={userInfo.blog} style={tailwind('flex-row items-center')}>
            <Image style={tailwind('w-4 mr-2')} src={'/icons/link.png'} />
            <Text style={tailwind('text-slate-500')}>{userInfo.blog}</Text>
          </Link>
        )}
        {userInfo.github && (
          <Link src={userInfo.github} style={tailwind('flex-row items-center')}>
            <Image style={tailwind('w-4 mr-2')} src={'/icons/github.png'} />
            <Text style={tailwind('text-slate-500')}>{userInfo.github}</Text>
          </Link>
        )}
      </View>
    </View>
  );
};

export default PdfIntroduce;
