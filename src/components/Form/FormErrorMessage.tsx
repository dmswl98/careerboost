import { clsx } from 'clsx';
import { type HTMLAttributes } from 'react';

interface FormErrorMessageProps extends HTMLAttributes<HTMLSpanElement> {
  message: string;
}

const FormErrorMessage = ({
  message,
  className,
  ...props
}: FormErrorMessageProps) => {
  return (
    <span className={clsx('text-xs text-red-300', className)} {...props}>
      {message}
    </span>
  );
};

export default FormErrorMessage;
