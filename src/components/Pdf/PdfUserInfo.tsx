/* eslint-disable jsx-a11y/alt-text */
import { Image, Link, Text, View } from '@react-pdf/renderer';

import { type UserInfoFormDataSchema } from '@/types/form';

import { tailwind } from './config';

interface PdfUserInfoProps {
  userInfo: UserInfoFormDataSchema['userInfo'];
}

const PdfUserInfo = ({ userInfo }: PdfUserInfoProps) => {
  return (
    <View
      style={tailwind(
        'flex-col justify-between bg-gray-100 text-gray-600 p-8 mt-[-29px] mx-[-23px]'
      )}
    >
      <View style={tailwind('flex-row')}>
        <Text style={tailwind('mr-4 text-2xl font-bold')}>
          {userInfo.name || '이름'}
        </Text>
        <Text style={tailwind('text-lg mt-1 font-semiBold')}>
          {userInfo.career || '직무'}
        </Text>
      </View>
      <View style={tailwind('flex-row gap-3 text-sm')}>
        <View style={tailwind('flex-row items-center')}>
          <Image style={tailwind('w-4 mr-2')} src={'/icons/phone.png'} />
          <Text>{userInfo.phone || '전화번호'}</Text>
        </View>
        <View style={tailwind('flex-row items-center')}>
          <Image style={tailwind('w-4 mr-2')} src={'/icons/mail.png'} />
          <Text>{userInfo.email || '이메일'}</Text>
        </View>
        {userInfo.blog ? (
          <Link src={userInfo.blog} style={tailwind('flex-row items-center')}>
            <Image style={tailwind('w-4 mr-2')} src={'/icons/link.png'} />
            <Text style={tailwind('text-gray-600')}>{userInfo.blog}</Text>
          </Link>
        ) : (
          <View style={tailwind('flex-row items-center')}>
            <Image style={tailwind('w-4 mr-2')} src={'/icons/link.png'} />
            <Text style={tailwind('text-gray-600')}>블로그</Text>
          </View>
        )}
        {userInfo.github ? (
          <Link src={userInfo.github} style={tailwind('flex-row items-center')}>
            <Image style={tailwind('w-4 mr-2')} src={'/icons/github.png'} />
            <Text style={tailwind('text-gray-600')}>{userInfo.github}</Text>
          </Link>
        ) : (
          <View style={tailwind('flex-row items-center')}>
            <Image style={tailwind('w-4 mr-2')} src={'/icons/github.png'} />
            <Text style={tailwind('text-gray-600')}>깃허브</Text>
          </View>
        )}
      </View>
      {userInfo.brief && (
        <Text style={tailwind('text-sm mt-4')}>{userInfo.brief}</Text>
      )}
    </View>
  );
};

export default PdfUserInfo;
