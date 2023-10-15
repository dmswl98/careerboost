import Sidebar from '@/components/Layout/Sidebar';
import FormProvider from '@/components/Providers/FormProvider';
import { type LangParams } from '@/i18n/types';
import { getDictionary } from '@/i18n/utils';

const Layout = async ({
  children,
  params: { lang },
}: StrictPropsWithChildren<LangParams>) => {
  const dictionary = await getDictionary(lang);

  return (
    <main className="mx-auto my-4 max-w-[1200px] px-4 sm:my-6 sm:px-6">
      <FormProvider>
        <div className="flex flex-col gap-6 md:flex-row-reverse md:justify-center">
          <Sidebar lang={lang} dictionary={dictionary} />
          {children}
        </div>
      </FormProvider>
    </main>
  );
};

export default Layout;
