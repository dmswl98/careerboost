import { usePathname, useRouter } from 'next/navigation';

import { Switch } from '@/components/common';
import { ROUTES } from '@/constants/routes';
import { type Locale } from '@/i18n/config';
import type * as i18n from '@/i18n/ko.json';

interface PreviewButtonProps {
  lang: Locale;
  dictionary: (typeof i18n)['sidebar']['previewButton'];
}

const PreviewButton = ({ lang, dictionary }: PreviewButtonProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const isChecked = pathname.includes(ROUTES.PREVIEW);

  const handlePreviewNavigate = (isChecked: boolean) => {
    isChecked ? router.push(`/${lang}${ROUTES.PREVIEW}`) : router.back();
  };

  return (
    <div className="mb-4 flex w-full items-center justify-between rounded-xl bg-gray-100/80 px-5 py-4">
      <div className="grow text-sm font-bold text-primary">{dictionary}</div>
      <Switch
        checked={isChecked}
        aria-label={dictionary}
        onCheckedChange={(isChecked) => handlePreviewNavigate(isChecked)}
      />
    </div>
  );
};

export default PreviewButton;
