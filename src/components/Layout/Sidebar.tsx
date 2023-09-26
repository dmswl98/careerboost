import { usePathname } from 'next/navigation';
import { useFormContext } from 'react-hook-form';

import { Progress } from '@/components/common';
import { MENU_INFO } from '@/constants/menu';
import type {
  ActivitiesFormDataSchema,
  ExperienceFormDataSchema,
  ProjectsFormDataSchema,
  ResumeFormDataSchema,
  UserInfoFormDataSchema,
} from '@/types/form';

import DownloadButton from './DownloadButton';
import MenuLink from './MenuLink';
import PreviewButton from './PreviewButton';

const Sidebar = () => {
  const pathname = usePathname();

  const {
    formState: { errors },
  } = useFormContext<ResumeFormDataSchema>();

  return (
    <aside className="flex h-fit min-w-[260px] flex-col">
      <div className="mb-2 rounded-xl border border-gray-200/70 bg-white px-5 py-7 md:mb-6">
        <h1 className="mb-2 text-base font-bold">이력서 완성도</h1>
        <Progress value={30} />
        <ul className="mt-6">
          <MenuLink<UserInfoFormDataSchema>
            isCurrentLocation={pathname === MENU_INFO.BASIC.ROUTE}
            title={MENU_INFO.BASIC.TITLE}
            route={MENU_INFO.BASIC.ROUTE}
            status={errors.userInfo}
          />
          <MenuLink<ExperienceFormDataSchema>
            isCurrentLocation={pathname === MENU_INFO.EXPERIENCE.ROUTE}
            title={MENU_INFO.EXPERIENCE.TITLE}
            route={MENU_INFO.EXPERIENCE.ROUTE}
            status={errors.experiences}
          />
          <MenuLink<ProjectsFormDataSchema>
            isCurrentLocation={pathname === MENU_INFO.PROJECT.ROUTE}
            title={MENU_INFO.PROJECT.TITLE}
            route={MENU_INFO.PROJECT.ROUTE}
            status={errors.projects}
          />
          <MenuLink<ActivitiesFormDataSchema>
            isCurrentLocation={pathname === MENU_INFO.ACTIVITY.ROUTE}
            title={MENU_INFO.ACTIVITY.TITLE}
            route={MENU_INFO.ACTIVITY.ROUTE}
            status={errors.activities}
          />
        </ul>
      </div>
      <PreviewButton />
      <DownloadButton isError={!!Object.keys(errors).length} />
    </aside>
  );
};

export default Sidebar;
