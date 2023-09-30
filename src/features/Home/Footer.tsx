import { Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/public/logo.png';

const GITHUB_REPO_LINK = 'https://github.com/dmswl98/careerboost';
const LINKEDIN_LINK =
  'https://www.linkedin.com/in/%EC%9D%80%EC%A7%80-%EC%B5%9C-484a34248/';

const Footer = () => {
  return (
    <footer className="w-full bg-black px-8 py-12">
      <div className="mb-10 flex">
        <Image src={Logo} width={28} alt="careerboost 이미지 로고" />
        <span className="ml-4 text-sm text-white">
          <strong className="text-lg">career</strong>BOOST
        </span>
      </div>
      <div className="flex justify-between">
        <span className="text-sm text-white/80">chej098t@gmail.com</span>
        <div className="flex gap-4">
          <Link href={GITHUB_REPO_LINK} target="_blank">
            <Github className="h-5 w-5 text-white/80 transition-all hover:text-white/60" />
          </Link>
          <Link href={LINKEDIN_LINK} target="_blank">
            <Linkedin className="h-5 w-5 text-white/80 transition-all hover:text-white/60" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
