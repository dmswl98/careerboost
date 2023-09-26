import { Button } from '@/components/common';

interface DownloadButtonProps {
  isError: boolean;
}

const DownloadButton = ({ isError }: DownloadButtonProps) => {
  return (
    <Button type="submit" disabled={isError}>
      이력서 다운로드
    </Button>
  );
};

export default DownloadButton;
