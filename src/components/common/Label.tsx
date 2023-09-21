import { clsx } from 'clsx';
import { type ComponentPropsWithoutRef, forwardRef } from 'react';

interface LabelProps extends ComponentPropsWithoutRef<'label'> {
  isRequired?: boolean;
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ isRequired = false, className, ...props }, ref) => (
    <>
      <label
        ref={ref}
        className={clsx(
          `mb-0 inline-block text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 min-[470px]:mb-1`,
          className
        )}
        {...props}
      />
      {isRequired && (
        <span className="ml-1 inline-block text-xs text-gray-400 min-[470px]:mb-1.5">
          ✱
        </span>
      )}
    </>
  )
);

Label.displayName = 'Label';

export default Label;
