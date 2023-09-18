interface FormErrorMessageProps {
  message: string;
}

const FormErrorMessage = ({ message }: FormErrorMessageProps) => {
  return <span className="text-xs text-red-300">{message}</span>;
};

export default FormErrorMessage;
