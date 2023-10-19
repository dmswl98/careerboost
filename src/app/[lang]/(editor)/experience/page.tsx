import { type Metadata } from 'next';

import { METADATA_EN, METADATA_KO } from '@/constants/meta';
import ExperienceFormView from '@/features/Experience/ExperienceFormView';
import { type LangParams } from '@/i18n/types';
import { getDictionary } from '@/i18n/utils';

export async function generateMetadata({
  params: { lang },
}: LangParams): Promise<Metadata> {
  return lang === 'ko'
    ? {
        ...METADATA_KO,
        title: '업무 경력 | CareerBoost',
      }
    : {
        ...METADATA_EN,
        title: 'Work Experience | CareerBoost',
      };
}

const Page = async ({ params: { lang } }: LangParams) => {
  const dictionary = await getDictionary(lang);

  return <ExperienceFormView dictionary={dictionary} />;
};

export default Page;
