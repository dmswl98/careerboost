import { clsx } from 'clsx';
import { type ComponentPropsWithoutRef, forwardRef } from 'react';

interface ProgressProps extends ComponentPropsWithoutRef<'div'> {
  value: number;
}

const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx(
        'relative h-2 w-full overflow-hidden rounded-full bg-gray-200/60',
        className
      )}
      {...props}
    >
      <div
        className="h-full w-full flex-1 bg-black transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </div>
  )
);

Progress.displayName = 'Progress';

export default Progress;
