'use client';

import { Languages } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

import { i18n } from '@/i18n/config';
import { type Locale } from '@/i18n/types';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '../common/Select';

const LANGUAGE = {
  ko: '한국어',
  en: 'English',
};

interface LanguageSwitcherProps {
  lang: Locale;
}

const LanguageSwitcher = ({ lang }: LanguageSwitcherProps) => {
  const router = useRouter();
  const pathName = usePathname();

  const handleLanguageChange = (locale: Locale) => {
    const pathSegments = pathName.split('/');
    pathSegments[1] = locale;

    const navigatePath = pathSegments.join('/');

    router.push(navigatePath);
  };

  return (
    <div className="grow-0">
      <Select
        defaultValue={lang}
        onValueChange={(locale: Locale) => handleLanguageChange(locale)}
      >
        <SelectTrigger className="mr-3 grow-0 border-0">
          <Languages className="text-gray-500" />
        </SelectTrigger>
        <SelectContent>
          {i18n.locales.map((locale) => (
            <SelectItem key={locale} value={locale} className="text-[16px]">
              {LANGUAGE[locale]}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSwitcher;
