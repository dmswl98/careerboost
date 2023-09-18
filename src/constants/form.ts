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
  DATE: 'YYYY.MM',
  IS_DOING: '진행 중',
};

export const INITIAL_VALUE = {
  userInfo: {
    name: '',
    career: '',
    brief: '',
    phone: '',
    email: '',
    blog: '',
    github: '',
  },
  project: {
    id: v4(),
    title: '',
    startDate: '',
    endDate: '',
    content: '',
    url: '',
  },
  activity: {
    id: v4(),
    title: '',
    institution: '',
    startDate: '',
    endDate: '',
    content: '',
  },
};
