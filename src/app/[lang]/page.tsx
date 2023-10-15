import Footer from '@/features/Home/Footer';
import Header from '@/features/Home/Header';
import Main from '@/features/Home/Main';
import { type LangParams } from '@/i18n/types';
import { getDictionary } from '@/i18n/utils';

export default async function Home({ params: { lang } }: LangParams) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="flex flex-col items-center bg-white">
      <Header dictionary={dictionary.home.header} />
      <Main dictionary={dictionary.home.banner} />
      <Footer />
    </div>
  );
}
