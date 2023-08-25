/* eslint-disable jsx-a11y/alt-text */
import { Image, Link, Text, View } from '@react-pdf/renderer';

import { USER_INFO } from '@/constants/user';

import { UserInfoFormSchema } from '../Form/UserInfoForm';
import { tailwind } from './config';

interface PdfIntroduceProps {
  userInfo: UserInfoFormSchema['userInfo'];
}

const PdfIntroduce = ({ userInfo }: PdfIntroduceProps) => {
  return (
    <View
      style={tailwind(
        'flex-column justify-between bg-slate-100 text-slate-500 p-8 mt-[-29px] mx-[-23px]'
      )}
    >
      <View style={tailwind('flex-row')}>
        <Text style={tailwind('mr-4 text-2xl font-bold')}>
          {userInfo.name || USER_INFO.name}
        </Text>
        <Text style={tailwind('text-lg mt-1 font-semiBold')}>
          {userInfo.career || USER_INFO.career}
        </Text>
      </View>
      <View style={tailwind('flex-row gap-3 text-sm mb-4')}>
        <View style={tailwind('flex-row items-center')}>
          <Image style={tailwind('w-4 mr-2')} src={'/icons/phone.png'} />
          <Text>{userInfo.phone || USER_INFO.phone}</Text>
        </View>
        <View style={tailwind('flex-row items-center')}>
          <Image style={tailwind('w-4 mr-2')} src={'/icons/mail.png'} />
          <Text>{userInfo.email || USER_INFO.email}</Text>
        </View>
        {userInfo.blog ? (
          <Link src={userInfo.blog} style={tailwind('flex-row items-center')}>
            <Image style={tailwind('w-4 mr-2')} src={'/icons/link.png'} />
            <Text style={tailwind('text-slate-500')}>
              {userInfo.blog || USER_INFO.blog}
            </Text>
          </Link>
        ) : (
          <View style={tailwind('flex-row items-center')}>
            <Image style={tailwind('w-4 mr-2')} src={'/icons/link.png'} />
            <Text style={tailwind('text-slate-500')}>
              {userInfo.blog || USER_INFO.blog}
            </Text>
          </View>
        )}
        {userInfo.github ? (
          <Link src={userInfo.github} style={tailwind('flex-row items-center')}>
            <Image style={tailwind('w-4 mr-2')} src={'/icons/github.png'} />
            <Text style={tailwind('text-slate-500')}>
              {userInfo.github || USER_INFO.github}
            </Text>
          </Link>
        ) : (
          <View style={tailwind('flex-row items-center')}>
            <Image style={tailwind('w-4 mr-2')} src={'/icons/github.png'} />
            <Text style={tailwind('text-slate-500')}>
              {userInfo.github || USER_INFO.github}
            </Text>
          </View>
        )}
      </View>
      <Text style={tailwind('text-sm')}>
        {userInfo.brief || USER_INFO.brief}
      </Text>
    </View>
  );
};

export default PdfIntroduce;
