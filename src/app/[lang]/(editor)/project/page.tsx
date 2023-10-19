import { type Metadata } from 'next';

import { METADATA_EN, METADATA_KO } from '@/constants/meta';
import ProjectFormView from '@/features/Project/ProjectFormView';
import { type LangParams } from '@/i18n/types';
import { getDictionary } from '@/i18n/utils';

export async function generateMetadata({
  params: { lang },
}: LangParams): Promise<Metadata> {
  return lang === 'ko'
    ? {
        ...METADATA_KO,
        title: '프로젝트 | CareerBoost',
      }
    : {
        ...METADATA_EN,
        title: 'Project | CareerBoost',
      };
}

const Page = async ({ params: { lang } }: LangParams) => {
  const dictionary = await getDictionary(lang);

  return <ProjectFormView dictionary={dictionary} />;
};

export default Page;
