import Image from 'next/image';

import { type Dictionary } from '@/i18n/types';

interface MainProps {
  dictionary: Dictionary['home']['banner'];
}

const Main = ({ dictionary }: MainProps) => {
  return (
    <main className="mb-20 h-fit px-6 sm:mb-10 sm:px-10 md:mb-24">
      <div className="relative flex max-w-[1080px] overflow-hidden rounded-2xl border border-gray-200/70 bg-[#F9F9F9] p-8 sm:p-12">
        <Image
          src="/landing.png"
          width={1200}
          height={300}
          className="absolute left-0 top-0 z-0 h-auto w-full"
          priority
          loading="eager"
          alt={dictionary.image}
        />
        <div className="z-10">
          <span className="font-semibold text-gray-400">
            {dictionary.subTitle}
          </span>
          <p className="text-xl font-bold text-primary sm:text-2xl">
            {dictionary.title}
          </p>
          <div className="mt-8 flex flex-col items-center sm:mt-14 md:mx-10">
            <div className="flex flex-col gap-6 text-sm sm:text-base md:flex-row md:flex-nowrap">
              <div className="flex flex-1 items-center rounded-lg bg-white/80 p-5 text-center">
                {dictionary.tip1}
              </div>
              <div className="flex flex-1 items-center rounded-lg bg-white/80 p-5 text-center">
                {dictionary.tip2}
              </div>
              <div className="flex flex-1 items-center rounded-lg bg-white/80 p-5 text-center">
                {dictionary.tip3}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
