'use client';

import Introduce from '@/components/Introduce';
import Footer from '@/components/layout/Footer';
import ProjectForm from '@/components/ProjectForm';
import useBeforeUnload from '@/hooks/useBeforeUnload';

export default function Home() {
  useBeforeUnload();

  return (
    <main>
      <Introduce />
      <ProjectForm />
      <Footer />
    </main>
  );
}
