import { ROUTES } from '@/constants/routes';

import { Progress } from '../common';
import ResumeStepMenuItem from './ResumeStepMenuItem';

const RESUME_STEP = [
  {
    title: '기본 정보',
    route: ROUTES.BASIC,
  },
  {
    title: '업무 경력',
    route: ROUTES.EXPERIENCE,
  },
  {
    title: '프로젝트',
    route: ROUTES.PROJECT,
  },
  {
    title: '활동',
    route: ROUTES.ACTIVITY,
  },
];

const ResumeStepMenu = () => {
  return (
    <aside className="h-fit w-[260px] rounded-xl border border-gray-200/70 bg-white px-5 py-7">
      <h1 className="mb-2 text-base font-bold">이력서 완성도</h1>
      <Progress value={30} />
      <ul className="mt-6">
        {RESUME_STEP.map((step) => (
          <ResumeStepMenuItem
            key={step.title}
            title={step.title}
            route={step.route}
          />
        ))}
      </ul>
    </aside>
  );
};

export default ResumeStepMenu;
