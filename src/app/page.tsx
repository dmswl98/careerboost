'use client';

import Introduce from '@/components/Introduce';
import Project from '@/components/Project';
import useBeforeUnload from '@/hooks/useBeforeUnload';

export default function Home() {
  useBeforeUnload();

  return (
    <main>
      <Introduce />
      <Project />
    </main>
  );
}
