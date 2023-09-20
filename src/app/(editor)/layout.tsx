'use client';

import SubmitButton from '@/components/Form/SubmitButton';
import Sidebar from '@/components/Layout/Sidebar';
import FormProvider from '@/components/Providers/FormProvider';

const Layout = ({ children }: StrictPropsWithChildren) => {
  return (
    <main className="mx-auto my-6 max-w-[1080px]">
      <FormProvider>
        <div className="flex gap-6">
          {children}
          <div className="flex flex-col">
            <Sidebar />
            <SubmitButton />
          </div>
        </div>
      </FormProvider>
    </main>
  );
};

export default Layout;
