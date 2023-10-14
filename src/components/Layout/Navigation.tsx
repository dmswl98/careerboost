import Image from 'next/image';
import Link from 'next/link';

const Navigation = ({ lang }: { lang: string }) => {
  return (
    <header className="flex shrink-0 border border-gray-200/70 bg-white px-6 py-3">
      <Link href={`/${lang}`} className="w-fit">
        <Image src="/logo.png" width={36} height={36} alt="careerboost logo" />
      </Link>
    </header>
  );
};

export default Navigation;
