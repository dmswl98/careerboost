'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import { Button } from '@/components/common';
import { ROUTES } from '@/constants/routes';
import { type Dictionary } from '@/i18n/types';
interface HeaderProps {
  dictionary: Dictionary['home']['header'];
}

const Header = ({ dictionary }: HeaderProps) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="flex w-full flex-col items-center justify-center px-6 py-16 sm:px-10 md:py-20">
      <Image
        src="/logo.png"
        width={140}
        height={140}
        className="mb-10 w-[100px] md:w-[140px]"
        priority
        loading="eager"
        alt="careerboost 로고"
      />
      <Image
        src="/text-logo.png"
        width={500}
        height={38}
        className="mb-6 w-[380px] md:w-[500px]"
        priority
        loading="eager"
        alt="careerboost 텍스트 로고"
      />
      <p className="mb-14 text-center text-lg">{dictionary.description}</p>
      <Button
        type="button"
        aria-label={dictionary.navigateButton}
        onClick={() => router.push(`${pathname}${ROUTES.BASIC}`)}
      >
        {dictionary.navigateButton}
      </Button>
    </header>
  );
};

export default Header;
