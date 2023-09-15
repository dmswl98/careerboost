import { clsx } from 'clsx';
import { type ComponentPropsWithoutRef, forwardRef } from 'react';

import { FormErrorMessage } from '@/components/common';

export interface TextareaProps extends ComponentPropsWithoutRef<'textarea'> {
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, className, ...props }, ref) => {
    return (
      <>
        <textarea
          ref={ref}
          className={clsx(
            `flex h-[80px] w-full resize-none rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-sm placeholder:text-gray-300 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${
              error ? 'border-red-300' : 'border-gray-200'
            }`,
            className
          )}
          {...props}
        />
        {error && <FormErrorMessage message={error} />}
      </>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
