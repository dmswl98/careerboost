import Image from 'next/image';

import Landing from '@/public/landing.png';

const Main = () => {
  return (
    <main className="mb-20 h-fit px-6 sm:mb-10 sm:px-10 md:mb-24">
      <div className="relative flex max-w-[1080px] overflow-hidden rounded-2xl border border-gray-200/70 bg-[#F9F9F9] p-8 sm:p-10">
        <Image
          src={Landing}
          className="absolute left-0 top-0 z-0 h-auto w-full"
          priority
          loading="eager"
          alt="서비스 사용 팁 배경"
        />
        <div className="z-10">
          <span className="font-semibold text-gray-400">서비스 사용 팁</span>
          <p className="text-2xl font-bold text-primary">
            어떻게 하면 이 서비스를 잘 활용할 수 있을까요?
          </p>
          <div className="mt-12 flex flex-col items-center md:mx-10">
            <div className="flex flex-col gap-6 text-sm md:flex-row md:flex-nowrap">
              <div className="flex flex-1 items-center rounded-lg bg-white/80 p-5 text-center">
                경험한 내용을 최대한 자세하게 작성하면 AI 첨삭 퀄리티를 높일 수
                있어요
              </div>
              <div className="flex flex-1 items-center rounded-lg bg-white/80 p-5 text-center">
                추가로 프로젝트에 사용된 기술 스택을 작성하면 프로젝트 내용과
                관련하여 첨삭받을 수 있어요
              </div>
              <div className="flex flex-1 items-center rounded-lg bg-white/80 p-5 text-center">
                AI 첨삭 내용을 적극적으로 반영해 나만의 이력서를 완성해보세요
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
