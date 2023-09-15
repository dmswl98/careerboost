'use client';

import ResumeStepMenu from '@/components/Layout/ResumeStepMenu';
import FormProvider from '@/components/Providers/FormProvider';

const Layout = ({ children }: StrictPropsWithChildren) => {
  return (
    <main className="mx-auto my-6 max-w-[1080px]">
      <FormProvider>
        <div className="flex gap-6">
          {children}
          <ResumeStepMenu />
        </div>
      </FormProvider>
    </main>
  );
};

export default Layout;
