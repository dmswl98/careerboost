'use client';

import { ServiceErrorMessage } from '@/components/common';

interface ErrorProps {
  error: Error;
}

const Error = ({ error }: ErrorProps) => {
  console.warn({ error });

  return <ServiceErrorMessage />;
};

export default Error;
