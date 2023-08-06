'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const useBeforeUnload = () => {
  const router = useRouter();

  useEffect(() => {
    const beforeUnloadHandler = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
    };

    window.onbeforeunload = beforeUnloadHandler;

    return () => {
      window.onbeforeunload = null;
    };
  }, [router]);
};

export default useBeforeUnload;
