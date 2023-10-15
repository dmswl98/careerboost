import { clsx } from 'clsx';
import { type ComponentPropsWithoutRef, forwardRef } from 'react';

import { FormErrorMessage } from '@/components/Form';

export interface TextareaProps extends ComponentPropsWithoutRef<'textarea'> {
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ id, error, className, ...props }, ref) => {
    return (
      <>
        <textarea
          id={id}
          ref={ref}
          className={clsx(
            `flex h-[80px] w-full resize-y rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-sm placeholder:text-gray-300 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${
              error ? 'border-red-300' : 'border-gray-200'
            }`,
            className
          )}
          aria-label={id}
          aria-invalid={error ? 'true' : 'false'}
          aria-errormessage={`error-message-${id}`}
          {...props}
        />
        {error && <FormErrorMessage id={id} message={error} />}
      </>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
