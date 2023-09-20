import { clsx } from 'clsx';
import { type HTMLAttributes } from 'react';

const Skeleton = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={clsx('animate-pulse rounded-xl bg-gray-200', className)}
      {...props}
    />
  );
};

export default Skeleton;
