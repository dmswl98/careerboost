'use client';

import ActivityForm from '@/components/Form/ActivityForm';
import ProjectForm from '@/components/Form/ProjectForm';
import SubmitButton from '@/components/Form/SubmitButton';
import Introduce from '@/components/Introduce';
import PdfFile from '@/components/PdfFile';
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
        <SubmitButton />
      </FormProvider>
    </main>
  );
}
