import ActivityFormView from '@/features/Activity/ActivityFormView';
import { type LangParams } from '@/i18n/config';
import { getDictionary } from '@/i18n/utils';

const Page = async ({ params: { lang } }: LangParams) => {
  const dictionary = await getDictionary(lang);

  return <ActivityFormView dictionary={dictionary.activity} />;
};

export default Page;
