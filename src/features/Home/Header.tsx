'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/common';
import { ROUTES } from '@/constants/routes';
import Logo from '@/public/logo.png';
import TextLogo from '@/public/text-logo.png';

const Header = () => {
  const router = useRouter();

  return (
    <header className="flex w-full flex-col items-center justify-center px-6 py-[140px] sm:px-10 md:py-[240px]">
      <Image
        src={Logo}
        className="mb-10 w-[100px] md:w-[140px]"
        priority
        loading="eager"
        alt="careerboost 이미지 로고"
      />
      <Image
        src={TextLogo}
        className="mb-6 w-[380px] md:w-[500px]"
        priority
        loading="eager"
        alt="careerboost 텍스트 로고"
      />
      <p className="mb-14 text-center text-lg">
        이력서 작성과 동시에 AI 첨삭도 받아보세요
      </p>
      <Button type="button" onClick={() => router.push(ROUTES.BASIC)}>
        이력서 작성하기
      </Button>
    </header>
  );
};

export default Header;
