import { ServiceErrorMessage } from '@/components/common';

const NotFound = () => {
  return (
    <ServiceErrorMessage title="페이지를 찾을 수 없어요" reset="홈으로 가기" />
  );
};

export default NotFound;
