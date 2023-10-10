import { usePathname, useRouter } from 'next/navigation';

import { Switch } from '@/components/common';
import { ROUTES } from '@/constants/routes';

const PreviewButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isChecked = pathname === ROUTES.PREVIEW;

  const handlePreviewNavigate = (isChecked: boolean) => {
    isChecked ? router.push(ROUTES.PREVIEW) : router.back();
  };

  return (
    <div className="mb-4 flex w-full items-center justify-between rounded-xl bg-gray-100/80 px-5 py-4">
      <div className="grow text-sm font-bold text-primary">이력서 미리보기</div>
      <Switch
        checked={isChecked}
        aria-label="이력서 미리보기"
        onCheckedChange={(isChecked) => handlePreviewNavigate(isChecked)}
      />
    </div>
  );
};

export default PreviewButton;
