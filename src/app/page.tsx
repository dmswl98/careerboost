'use client';

import ActivityForm from '@/components/Form/ActivityForm';
import ProjectForm from '@/components/Form/ProjectForm';
import SubmitButton from '@/components/Form/SubmitButton';
import Introduce from '@/components/Introduce';
import PdfDocumentViewer from '@/components/Pdf/PdfDocumentViewer';
import FormProvider from '@/components/Providers/FormProvider';
import useBeforeUnload from '@/hooks/useBeforeUnload';

export default function Home() {
  useBeforeUnload();

  return (
    <main>
      <FormProvider>
        <Introduce />
        <ProjectForm />
        <ActivityForm />
        <PdfDocumentViewer />
        <SubmitButton />
      </FormProvider>
    </main>
  );
}
