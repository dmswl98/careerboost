import { v4 } from 'uuid';

export const PLACEHOLDER = {
  userInfo: {
    name: '이름',
    career: '프론트엔드 개발자',
    brief: '나만의 소개글을 작성해보세요',
    phone: '010-1234-5678',
    email: 'eunji@gmail.com',
    link: 'https://',
  },
  project: {
    title: '프로젝트명',
    date: 'YYYY.MM',
    url: '프로젝트 주소',
    content: '프로젝트 내용과 본인의 역할, 기여도를 작성해보세요',
  },
  activity: {
    title: '활동명',
    group: '소속/기관',
    date: 'YYYY.MM',
    content: '참여한 강연, 발표, 스터디 및 외부 활동에 대해 작성해보세요',
  },
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
    startDate: '',
    endDate: '',
    content: '',
  },
};
