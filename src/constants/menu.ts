import { ROUTES } from './routes';

export const MENU_INFO = {
  BASIC: {
    TITLE: '기본 정보',
    GUIDE: '입력한 정보가 올바른지 다시 한 번 확인해주세요',
    ROUTE: ROUTES.BASIC,
  },
  EXPERIENCE: {
    TITLE: '업무 경력',
    GUIDE:
      '💡 주도적으로 특정 기능 개발을 이끌어 달성한 구체적인 성과를 작성해 전문성과 협업 역량을 강조해보세요',
    ROUTE: ROUTES.EXPERIENCE,
  },
  PROJECT: {
    TITLE: '프로젝트',
    GUIDE:
      '💡 단순히 어떤 기술을 사용했다는 것보다 해당 프로젝트에서 마주친 문제를 해결한 과정과 배운 점, 결과 등을 강조해보세요',
    ROUTE: ROUTES.PROJECT,
  },
  ACTIVITY: {
    TITLE: '수상 및 활동',
    GUIDE:
      '💡 활동에 참여한 동기와 어떤 역량을 키울 수 있었는지 구체적으로 작성하여 지속적인 성장 의지와 전문성을 강조해보세요',
    ROUTE: ROUTES.ACTIVITY,
  },
} as const;
