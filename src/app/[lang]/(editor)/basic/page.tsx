import { type Metadata } from 'next';

import { METADATA_EN, METADATA_KO } from '@/constants/meta';
import BasicFormView from '@/features/Basic/BasicFormView';
import { type LangParams } from '@/i18n/types';
import { getDictionary } from '@/i18n/utils';

export async function generateMetadata({
  params,
}: LangParams): Promise<Metadata> {
  const { lang } = await params;

  return lang === 'ko'
    ? {
        ...METADATA_KO,
        title: '기본 정보 | CareerBoost',
      }
    : {
        ...METADATA_EN,
        title: 'Basic Information | CareerBoost',
      };
}

const Page = async ({ params }: LangParams) => {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return <BasicFormView dictionary={dictionary.basic} />;
};

export default Page;
