export const METADATA = {
  KO: {
    TITLE: 'CareerBoost | AI 기반 이력서 첨삭 및 이력서 작성 서비스',
    DESCRIPTION: '이력서 작성과 동시에 AI 첨삭도 받아보세요.',
    KEYWORD: ['이력서', '첨삭', 'chatgpt', 'gpt 이력서', 'AI 이력서'],
    LOCALE: 'ko_KR',
  },
  EN: {
    TITLE: 'CareerBoost | AI-based Resume Review and Writing Service',
    DESCRIPTION:
      'Write your resume and receive AI proofreading at the same time.',
    KEYWORD: ['Resume', 'Proofreading', 'chatgpt', 'gpt resume', 'AI Resume'],
    LOCALE: 'en_US',
  },
  OPEN_GRAPH: {
    SITE_NAME: 'CareerBoost',
    URL: 'https://careerboost.vercel.app',
    TYPE: 'website',
  },
  CREATOR: '@dmswl',
  GENERATOR: 'Next.js 13',
  VIEWPORT: {
    width: 'device-width',
    initialScale: 1,
  },
};

export const METADATA_KO = {
  title: METADATA.KO.TITLE,
  description: METADATA.KO.DESCRIPTION,
  keywords: [...METADATA.KO.KEYWORD],
  openGraph: {
    ...METADATA.OPEN_GRAPH,
    title: METADATA.KO.TITLE,
    description: METADATA.KO.DESCRIPTION,
    locale: METADATA.KO.LOCALE,
  },
  twitter: {
    title: METADATA.KO.TITLE,
    description: METADATA.KO.DESCRIPTION,
  },
};

export const METADATA_EN = {
  title: METADATA.EN.TITLE,
  description: METADATA.EN.DESCRIPTION,
  keywords: [...METADATA.EN.KEYWORD],
  openGraph: {
    ...METADATA.OPEN_GRAPH,
    title: METADATA.EN.TITLE,
    description: METADATA.EN.DESCRIPTION,
    locale: METADATA.EN.LOCALE,
  },
  twitter: {
    title: METADATA.EN.TITLE,
    description: METADATA.EN.DESCRIPTION,
  },
};
