import { usePathname } from 'next/navigation';

import { MENU_INFO } from '@/constants/menu';
import type {
  ActivitiesFormDataSchema,
  ExperienceFormDataSchema,
  ProjectsFormDataSchema,
  UserInfoFormDataSchema,
} from '@/types/form';

import DownloadButton from './DownloadButton';
import MenuLink from './MenuLink';
import PreviewButton from './PreviewButton';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="flex h-fit min-w-[260px] flex-col">
      <div className="mb-2 rounded-xl border border-gray-200/70 bg-white px-5 py-7 md:mb-6">
        <h1 className="mb-2 text-base font-bold">이력서 작성하기</h1>
        <ul className="mt-6">
          <MenuLink<UserInfoFormDataSchema>
            formName="userInfo"
            isCurrentLocation={pathname === MENU_INFO.BASIC.ROUTE}
            title={MENU_INFO.BASIC.TITLE}
            route={MENU_INFO.BASIC.ROUTE}
          />
          <MenuLink<ExperienceFormDataSchema>
            formName="experiences"
            isCurrentLocation={pathname === MENU_INFO.EXPERIENCE.ROUTE}
            title={MENU_INFO.EXPERIENCE.TITLE}
            route={MENU_INFO.EXPERIENCE.ROUTE}
          />
          <MenuLink<ProjectsFormDataSchema>
            formName="projects"
            isCurrentLocation={pathname === MENU_INFO.PROJECT.ROUTE}
            title={MENU_INFO.PROJECT.TITLE}
            route={MENU_INFO.PROJECT.ROUTE}
          />
          <MenuLink<ActivitiesFormDataSchema>
            formName="activities"
            isCurrentLocation={pathname === MENU_INFO.ACTIVITY.ROUTE}
            title={MENU_INFO.ACTIVITY.TITLE}
            route={MENU_INFO.ACTIVITY.ROUTE}
          />
        </ul>
      </div>
      <PreviewButton />
      <DownloadButton />
    </aside>
  );
};

export default Sidebar;
