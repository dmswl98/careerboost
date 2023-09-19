import { ROUTES } from './routes';

export const MENU_TITLE = {
  BASIC: '기본 정보',
  EXPERIENCE: '업무 경력',
  PROJECT: '프로젝트',
  ACTIVITY: '수상 및 활동',
};

export const SIDEBAR_MENU = [
  {
    title: MENU_TITLE.BASIC,
    route: ROUTES.BASIC,
  },
  {
    title: MENU_TITLE.EXPERIENCE,
    route: ROUTES.EXPERIENCE,
  },
  {
    title: MENU_TITLE.PROJECT,
    route: ROUTES.PROJECT,
  },
  {
    title: MENU_TITLE.ACTIVITY,
    route: ROUTES.ACTIVITY,
  },
];
