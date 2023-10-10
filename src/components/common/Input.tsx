import { clsx } from 'clsx';
import { type ComponentPropsWithoutRef, forwardRef } from 'react';

import { FormErrorMessage } from '@/components/Form';

interface Label {
  text: string;
  isRequired?: boolean;
}

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label?: Label;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, type = 'text', className, label, error, ...props }, ref) => {
    return (
      <div className="relative flex grow flex-col">
        {label?.text && (
          <div>
            <label
              htmlFor={id}
              className={clsx(
                'mb-0 inline-block text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 min-[470px]:mb-1',
                className
              )}
            >
              {label.text}
            </label>
            {label.isRequired && (
              <span
                className="ml-1 inline-block text-xs text-gray-400 min-[470px]:mb-1.5"
                aria-hidden
              >
                ✱
              </span>
            )}
          </div>
        )}
        {error && (
          <FormErrorMessage
            id={id}
            className="absolute right-0 top-1.5"
            message={error}
          />
        )}
        <input
          id={id}
          type={type}
          ref={ref}
          className={clsx(
            `flex h-10 w-full grow rounded-md border bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-sm placeholder:text-gray-300 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${
              error ? 'border-red-300' : 'border-gray-200'
            }`,
            className
          )}
          aria-label={id}
          aria-required={label?.isRequired}
          aria-invalid={error ? 'true' : 'false'}
          aria-errormessage={`error-message-${id}`}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
