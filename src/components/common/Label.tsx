import { clsx } from 'clsx';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

interface LabelProps extends ComponentPropsWithoutRef<'label'> {}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={clsx(
        `text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70`,
        className
      )}
      {...props}
    />
  )
);

Label.displayName = 'Label';

export default Label;
