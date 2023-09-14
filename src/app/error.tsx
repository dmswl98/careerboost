'use client';

import { ServiceErrorMessage } from '@/components/common';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  console.warn({ error });

  return <ServiceErrorMessage onReset={reset} />;
};

export default Error;
