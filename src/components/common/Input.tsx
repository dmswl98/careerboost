import { clsx } from 'clsx';
import { type ComponentPropsWithoutRef, forwardRef } from 'react';

import { FormErrorMessage } from '@/components/Form';

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', className, error, ...props }, ref) => {
    return (
      <>
        <input
          type={type}
          ref={ref}
          className={clsx(
            `flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-sm placeholder:text-gray-300 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${
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

Input.displayName = 'Input';

export default Input;
