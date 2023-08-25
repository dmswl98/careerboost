'use client';

import ActivityForm from '@/components/Form/ActivityForm';
import ProjectForm from '@/components/Form/ProjectForm';
import SubmitButton from '@/components/Form/SubmitButton';
import Introduce from '@/components/Introduce';
import PdfDocumentViewer from '@/components/Pdf/PdfDocumentViewer';
import FormProvider from '@/components/Providers/FormProvider';
import useBeforeUnload from '@/hooks/useBeforeUnload';
import { useIsPreview } from '@/store/preview';

export default function Home() {
  const isPreview = useIsPreview();

  useBeforeUnload();

  return (
    <main>
      <FormProvider>
        {isPreview ? (
          <PdfDocumentViewer />
        ) : (
          <>
            <Introduce />
            <ProjectForm />
            <ActivityForm />
          </>
        )}
        <SubmitButton />
      </FormProvider>
    </main>
  );
}
