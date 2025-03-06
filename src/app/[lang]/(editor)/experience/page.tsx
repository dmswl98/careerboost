import { type Metadata } from 'next';

import { METADATA_EN, METADATA_KO } from '@/constants/meta';
import ExperienceFormView from '@/features/Experience/ExperienceFormView';
import { type LangParams } from '@/i18n/types';
import { getDictionary } from '@/i18n/utils';

export async function generateMetadata({
  params,
}: LangParams): Promise<Metadata> {
  const { lang } = await params;

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

const Page = async ({ params }: LangParams) => {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return <ExperienceFormView dictionary={dictionary} />;
};

export default Page;
