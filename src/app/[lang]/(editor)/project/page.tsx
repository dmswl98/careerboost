import ProjectFormView from '@/features/Project/ProjectFormView';
import { type LangParams } from '@/i18n/config';
import { getDictionary } from '@/i18n/utils';

const Page = async ({ params: { lang } }: LangParams) => {
  const dictionary = await getDictionary(lang);

  return <ProjectFormView dictionary={dictionary.project} />;
};

export default Page;
