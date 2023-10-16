import Image from 'next/image';
import Link from 'next/link';

import { type Locale } from '@/i18n/types';

import LanguageSwitcher from './LanguageSwitcher';

interface NavigationProps {
  lang: Locale;
}

const Navigation = ({ lang }: NavigationProps) => {
  return (
    <header className="flex w-full shrink-0 items-center justify-between border border-gray-200/70 bg-white px-6 py-3">
      <Link href={`/${lang}`} className="w-fit">
        <Image src="/logo.png" width={36} height={36} alt="careerboost logo" />
      </Link>
      <LanguageSwitcher lang={lang} />
    </header>
  );
};

export default Navigation;
