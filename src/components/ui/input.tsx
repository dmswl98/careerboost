import * as React from 'react';

import { cn } from '@/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  outline?: boolean;
  fontSize?: number;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, outline = true, fontSize, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `flex h-10 w-full ${
            outline ? 'rounded-md border border-input' : ''
          } ${
            fontSize ? `text-[${fontSize}px]` : 'text-md'
          } bg-background px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50`,
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
