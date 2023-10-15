import BasicFormView from '@/features/Basic/BasicFormView';
import { type LangParams } from '@/i18n/types';
import { getDictionary } from '@/i18n/utils';

const Page = async ({ params: { lang } }: LangParams) => {
  const dictionary = await getDictionary(lang);

  return <BasicFormView dictionary={dictionary.basic} />;
};

export default Page;
