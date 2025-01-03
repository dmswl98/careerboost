import { Font } from '@react-pdf/renderer';
import { createTw } from 'react-pdf-tailwind';

const Pretendard = {
  light:
    'https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff',
  regular:
    'https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff',
  semiBold:
    'https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff',
  bold: 'https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff',
};

Font.register({ family: 'PretendardLight', src: Pretendard.light });
Font.register({ family: 'PretendardRegular', src: Pretendard.regular });
Font.register({ family: 'PretendardSemiBold', src: Pretendard.semiBold });
Font.register({ family: 'PretendardBold', src: Pretendard.bold });

export const tailwind = createTw({
  theme: {
    fontFamily: {
      light: 'PretendardLight',
      regular: 'PretendardRegular',
      semiBold: 'PretendardSemiBold',
      bold: 'PretendardBold',
    },
  },
});
