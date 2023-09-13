import { clsx } from 'clsx';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

import RequireMark from './RequireMark';

interface LabelProps extends ComponentPropsWithoutRef<'label'> {
  isRequired?: boolean;
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ isRequired = false, className, ...props }, ref) => (
    <>
      <label
        ref={ref}
        className={clsx(
          `text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70`,
          className
        )}
        {...props}
      />
      {isRequired && <RequireMark />}
    </>
  )
);

Label.displayName = 'Label';

export default Label;
