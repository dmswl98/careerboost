'use client';

import ActivityForm from '@/components/ActivityForm';
import Introduce from '@/components/Introduce';
import Footer from '@/components/Llayout/Footer';
import ProjectForm from '@/components/ProjectForm';
import useBeforeUnload from '@/hooks/useBeforeUnload';

export default function Home() {
  useBeforeUnload();

  return (
    <main>
      <Introduce />
      <ProjectForm />
      <ActivityForm />
      <Footer />
    </main>
  );
}
