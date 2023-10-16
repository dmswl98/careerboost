import ActivityFormView from '@/features/Activity/ActivityFormView';
import { type LangParams } from '@/i18n/types';
import { getDictionary } from '@/i18n/utils';

const Page = async ({ params: { lang } }: LangParams) => {
  const dictionary = await getDictionary(lang);

  return <ActivityFormView dictionary={dictionary} />;
};

export default Page;
