import * as React from 'react';

import { cn } from '@/utils/tailwindMerge';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  outline?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, outline = true, ...props }, ref) => {
    const outlineStyles = outline
      ? 'border rounded-md border-input text-sm placeholder:text-sm'
      : 'p-0 pl-1 text-lg font-bold border-b border-white text-gray-500 placeholder:text-lg placeholder:font-bold placeholder:text-gray-300';

    return (
      <input
        type={type}
        className={cn(
          `flex h-10 w-full bg-background px-3 py-2 ring-offset-background placeholder:text-muted-foreground placeholder:text-gray-300 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${outlineStyles}`,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
