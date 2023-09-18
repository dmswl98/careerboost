'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/common';
import { ROUTES } from '@/constants/routes';

const ERROR_MESSAGE = {
  TITLE: '일시적인 오류가 발생했어요',
  DESCRIPTION: '잠시 후 다시 시도해주세요',
  BUTTON_CONTENT: '재시도',
};

interface ServiceErrorMessageProps {
  title?: string;
  description?: string;
  buttonContent?: string;
  route?: (typeof ROUTES)[keyof typeof ROUTES];
}

const ServiceErrorMessage = ({
  title = ERROR_MESSAGE.TITLE,
  description = ERROR_MESSAGE.DESCRIPTION,
  buttonContent = ERROR_MESSAGE.BUTTON_CONTENT,
  route = ROUTES.HOME,
}: ServiceErrorMessageProps) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(route);
  };

  return (
    <div className="my-10 flex flex-col items-center justify-center">
      <p className="mb-1 text-xl font-bold">{title}</p>
      <p className="mb-4">{description}</p>
      <Button onClick={handleNavigate}>{buttonContent}</Button>
    </div>
  );
};

export default ServiceErrorMessage;
