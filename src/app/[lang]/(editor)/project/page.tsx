import ProjectFormView from '@/features/Project/ProjectFormView';
import { type LangParams } from '@/i18n/types';
import { getDictionary } from '@/i18n/utils';

const Page = async ({ params: { lang } }: LangParams) => {
  const dictionary = await getDictionary(lang);

  return <ProjectFormView dictionary={dictionary} />;
};

export default Page;
