'use client';

import SubmitButton from '@/components/Form/SubmitButton';
import Sidebar from '@/components/Layout/Sidebar';
import FormProvider from '@/components/Providers/FormProvider';

const Layout = ({ children }: StrictPropsWithChildren) => {
  return (
    <main className="mx-auto my-4 max-w-[1080px] px-4 sm:my-6 sm:px-6">
      <FormProvider>
        <div className="flex flex-col gap-6 md:flex-row-reverse">
          <div className="flex min-w-[260px] flex-col">
            <Sidebar />
            <SubmitButton />
          </div>
          {children}
        </div>
      </FormProvider>
    </main>
  );
};

export default Layout;
