'use client';

import { usePathname } from 'next/navigation';

import { ROUTES } from '@/constants/routes';
import type { Dictionary, Locale } from '@/i18n/types';
import type {
  ActivitiesFormDataSchema,
  ExperienceFormDataSchema,
  ProjectsFormDataSchema,
  UserInfoFormDataSchema,
} from '@/types/form';

import DownloadButton from './DownloadButton';
import MenuLink from './MenuLink';
import PreviewButton from './PreviewButton';

interface SidebarProps {
  lang: Locale;
  dictionary: Dictionary;
}

const Sidebar = ({ lang, dictionary }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <aside className="flex h-fit min-w-[260px] flex-col">
      <div className="mb-2 rounded-xl border border-gray-200/70 bg-white px-5 py-7 md:mb-6">
        <h1 className="mb-2 text-base font-bold">{dictionary.sidebar.title}</h1>
        <ul className="mt-6">
          <MenuLink<UserInfoFormDataSchema>
            formName="userInfo"
            isCurrentLocation={pathname.includes(ROUTES.BASIC)}
            title={dictionary.basic.section.title}
            route={`/${lang}${ROUTES.BASIC}`}
          />
          <MenuLink<ExperienceFormDataSchema>
            formName="experiences"
            isCurrentLocation={pathname.includes(ROUTES.EXPERIENCE)}
            title={dictionary.experience.section.title}
            route={`/${lang}${ROUTES.EXPERIENCE}`}
          />
          <MenuLink<ProjectsFormDataSchema>
            formName="projects"
            isCurrentLocation={pathname.includes(ROUTES.PROJECT)}
            title={dictionary.project.section.title}
            route={`/${lang}${ROUTES.PROJECT}`}
          />
          <MenuLink<ActivitiesFormDataSchema>
            formName="activities"
            isCurrentLocation={pathname.includes(ROUTES.ACTIVITY)}
            title={dictionary.activity.section.title}
            route={`/${lang}${ROUTES.ACTIVITY}`}
          />
        </ul>
      </div>
      <PreviewButton
        lang={lang}
        dictionary={dictionary.sidebar.previewButton}
      />
      <DownloadButton dictionary={dictionary.sidebar.downloadButton} />
    </aside>
  );
};

export default Sidebar;
