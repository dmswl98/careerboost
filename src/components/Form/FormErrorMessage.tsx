import { clsx } from 'clsx';
import { type HTMLAttributes } from 'react';

interface FormErrorMessageProps extends HTMLAttributes<HTMLSpanElement> {
  message: string;
}

const FormErrorMessage = ({
  id,
  message,
  className,
  ...props
}: FormErrorMessageProps) => {
  return (
    <span
      id={`error-message-${id}`}
      role="alert"
      className={clsx('text-xs text-red-300', className)}
      {...props}
    >
      {message}
    </span>
  );
};

export default FormErrorMessage;
