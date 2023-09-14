'use client';

import { useRouter } from 'next/navigation';

import { Button } from '../ui/button';

const ERROR_MESSAGE = {
  TITLE: '일시적인 오류가 발생했어요',
  DESCRIPTION: '잠시 후 다시 시도해주세요',
  RESET: '재시도',
};

interface ErrorMessageProps {
  title?: string;
  description?: string;
  reset?: string;
  onReset?: () => void;
}

const ErrorMessage = ({
  title = ERROR_MESSAGE.TITLE,
  description = ERROR_MESSAGE.DESCRIPTION,
  reset = ERROR_MESSAGE.RESET,
  onReset,
}: ErrorMessageProps) => {
  const router = useRouter();

  const handleHomeNavigate = () => {
    router.push('/');
  };

  return (
    <div className="my-10 flex flex-col items-center justify-center">
      <p className="mb-1 text-xl font-bold">{title}</p>
      <p className="mb-4">{description}</p>
      <Button onClick={onReset || handleHomeNavigate}>{reset}</Button>
    </div>
  );
};

export default ErrorMessage;
