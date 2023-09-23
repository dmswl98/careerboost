import { v4 } from 'uuid';

export const PLACEHOLDER = {
  USER_INFO: {
    NAME: '이름',
    CAREER: '프론트엔드 개발자',
    PHONE: '010-1234-5678',
    EMAIL: 'choieunji@gmail.com',
    URL: 'https://',
    BRIEF: '나만의 소개글을 작성해보세요',
  },
  EXPERIENCE: {
    COMPANY: '회사명',
    EMPLOYMENT_TYPE: '근무 형태',
    JOB_TITLE: '직무',
    CONTENT: '맡은 역할과 달성한 구체적인 성과를 작성해보세요',
  },
  PROJECT: {
    TITLE: '프로젝트명',
    URL: '프로젝트 주소',
    CONTENT: '프로젝트 내용과 본인의 역할, 기여도를 작성해보세요',
  },
  ACTIVITY: {
    TITLE: '수상 및 활동명',
    INSTITUTION: '소속/기관',
    CONTENT: '참여한 강연, 발표, 스터디 및 외부 활동에 대해 작성해보세요',
  },
  PERIOD: {
    WORKING: '재직 중',
    PROGRESS: '진행 중',
  },
  DATE: 'YYYY.MM',
};

export const INITIAL_VALUE = {
  USER_INFO: {
    name: '',
    career: '',
    brief: '',
    phone: '',
    email: '',
    blog: '',
    github: '',
  },
  EXPERIENCE: {
    id: v4(),
    company: '',
    employmentType: '',
    jobTitle: '',
    startDate: '',
    endDate: '',
    content: '',
  },
  PROJECT: {
    id: v4(),
    title: '',
    startDate: '',
    endDate: '',
    content: '',
    url: '',
  },
  ACTIVITY: {
    id: v4(),
    title: '',
    institution: '',
    startDate: '',
    endDate: '',
    content: '',
  },
};

export const EMPLOYMENT_TYPE = {
  FULL_TIME: '정규직',
  CONTRACTOR: '계약직',
  FREELANCER: '프리랜서',
  INTERN: '인턴',
  ETC: '기타',
};

export const EMPLOYMENT_TYPES = [
  EMPLOYMENT_TYPE.FULL_TIME,
  EMPLOYMENT_TYPE.CONTRACTOR,
  EMPLOYMENT_TYPE.FREELANCER,
  EMPLOYMENT_TYPE.INTERN,
  EMPLOYMENT_TYPE.ETC,
];

export const PERIOD_LABEL = {
  WORKING: '아직 재직 중이에요',
  PROGRESS: '아직 진행 중이에요',
};
