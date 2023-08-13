/* eslint-disable jsx-a11y/alt-text */
import {
  Document,
  Font,
  Image,
  Link,
  Page,
  PDFViewer,
  Text,
  View,
} from '@react-pdf/renderer';
import { createTw } from 'react-pdf-tailwind';

import { USER_INFO } from '@/constants/user';
import {
  useBlog,
  useBrief,
  useCareer,
  useEmail,
  useGithub,
  useName,
  usePhone,
} from '@/store/resume';

const PretendardRegular =
  'https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.ttf';
const PretendardBold =
  'https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.ttf';

Font.register({ family: 'PretendardRegular', src: PretendardRegular });
Font.register({ family: 'PretendardBold', src: PretendardBold });

const tw = createTw({
  theme: {
    fontFamily: {
      normal: 'PretendardRegular',
      bold: 'PretendardBold',
    },
  },
});

const RenderedPdf = () => {
  const name = useName();
  const career = useCareer();
  const brief = useBrief();
  const phone = usePhone();
  const email = useEmail();
  const blog = useBlog();
  const github = useGithub();

  return (
    <PDFViewer width="100%" height="650px">
      <Document>
        <Page size="A4" style={tw('font-normal')}>
          <View
            style={tw('flex justify-between bg-slate-100 p-8 text-slate-500')}
          >
            <View style={tw('flex-row')}>
              <Text style={tw('mr-4 text-2xl font-bold')}>
                {name || USER_INFO.name}
              </Text>
              <Text style={tw('text-lg mt-1 font-semibold')}>
                {career || USER_INFO.career}
              </Text>
            </View>
            <Text style={tw('mb-4 text-sm')}>{brief || USER_INFO.brief}</Text>
            <View style={tw('flex-row gap-3 text-sm')}>
              <View style={tw('flex-row items-center')}>
                <Image style={tw('w-4 mr-2')} src={'/icons/phone.png'} />
                <Text>{phone || USER_INFO.phone}</Text>
              </View>
              <View style={tw('flex-row items-center')}>
                <Image style={tw('w-4 mr-2')} src={'/icons/mail.png'} />
                <Text>{email || USER_INFO.email}</Text>
              </View>
              <Link
                src={'https://github.com/orioncactus/pretendard'}
                style={tw('flex-row items-center')}
              >
                <Image style={tw('w-4 mr-2')} src={'/icons/link.png'} />
                <Text style={tw('text-slate-500')}>
                  {blog || USER_INFO.blog}
                </Text>
              </Link>
              <Link
                src={'https://github.com/orioncactus/pretendard'}
                style={tw('flex-row items-center')}
              >
                <Image style={tw('w-4 mr-2')} src={'/icons/github.png'} />
                <Text style={tw('text-slate-500')}>
                  {github || USER_INFO.github}
                </Text>
              </Link>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default RenderedPdf;
