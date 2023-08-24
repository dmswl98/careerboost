'use client';

import ErrorMessage from '@/components/common/ErrorMessage';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  console.log({ error });

  return <ErrorMessage onReset={reset} />;
};

export default Error;
