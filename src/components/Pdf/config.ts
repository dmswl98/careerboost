import { Font } from '@react-pdf/renderer';
import { createTw } from 'react-pdf-tailwind';

const Pretendard = {
  light:
    'https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraLight.ttf',
  regular:
    'https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.ttf',
  bold: 'https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.ttf',
};

Font.register({ family: 'PretendardLight', src: Pretendard.light });
Font.register({ family: 'PretendardRegular', src: Pretendard.regular });
Font.register({ family: 'PretendardBold', src: Pretendard.bold });

export const tailwind = createTw({
  theme: {
    fontFamily: {
      light: 'PretendardLight',
      regular: 'PretendardRegular',
      bold: 'PretendardBold',
    },
  },
});
