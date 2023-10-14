import ExperienceFormView from '@/features/Experience/ExperienceFormView';
import { type LangParams } from '@/i18n/config';
import { getDictionary } from '@/i18n/utils';

const Page = async ({ params: { lang } }: LangParams) => {
  const dictionary = await getDictionary(lang);

  return <ExperienceFormView dictionary={dictionary.experience} />;
};

export default Page;
