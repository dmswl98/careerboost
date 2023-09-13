import { clsx } from 'clsx';
import { type ComponentPropsWithoutRef, forwardRef } from 'react';

export interface InputProps extends ComponentPropsWithoutRef<'input'> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, className, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={clsx(
          `flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-sm placeholder:text-gray-300 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50`,
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
