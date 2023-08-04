import localFont from 'next/font/local';

export const pretendard = localFont({
  src: './PretendardVariable.woff2',
  display: 'swap',
  fallback: [
    'Pretendard',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
});

export const sourceCode = localFont({
  src: './SourceCodePro-VariableFont_wght.woff2',
  display: 'swap',
  variable: '--font-sourceCode',
  fallback: [
    'Source Code Pro',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
});
