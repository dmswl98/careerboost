'use client';

import ActivityForm from '@/components/ActivityForm';
import Introduce from '@/components/Introduce';
import Footer from '@/components/Layout/Footer';
import PdfFile from '@/components/PdfFile';
import ProjectForm from '@/components/ProjectForm';
import FormProvider from '@/components/Providers/FormProvider';
import useBeforeUnload from '@/hooks/useBeforeUnload';

export default function Home() {
  useBeforeUnload();

  return (
    <main>
      <Introduce />
      <FormProvider>
        <ProjectForm />
        <ActivityForm />
        <PdfFile />
        <Footer />
      </FormProvider>
    </main>
  );
}
