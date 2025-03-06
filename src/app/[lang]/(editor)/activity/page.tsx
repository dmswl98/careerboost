import { type Metadata } from 'next';

import { METADATA_EN, METADATA_KO } from '@/constants/meta';
import ActivityFormView from '@/features/Activity/ActivityFormView';
import { type LangParams } from '@/i18n/types';
import { getDictionary } from '@/i18n/utils';

export async function generateMetadata({
  params,
}: LangParams): Promise<Metadata> {
  const { lang } = await params;

  return lang === 'ko'
    ? {
        ...METADATA_KO,
        title: '수상 및 활동 | CareerBoost',
      }
    : {
        ...METADATA_EN,
        title: 'Awards and Activities | CareerBoost',
      };
}

const Page = async ({ params }: LangParams) => {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return <ActivityFormView dictionary={dictionary} />;
};

export default Page;
