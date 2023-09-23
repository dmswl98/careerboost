import {
  type ActivitiesFormDataSchema,
  type ExperienceFormDataSchema,
  type ProjectsFormDataSchema,
  type UserInfoFormDataSchema,
} from '@/types/form';

const SERVICE_NAME = 'CAREERBOOST';

export const STORAGE_KEY = {
  USER_INFO: `${SERVICE_NAME}_USER_INFO`,
  EXPERIENCE: `${SERVICE_NAME}_EXPERIENCE`,
  PROJECT: `${SERVICE_NAME}_PROJECT`,
  ACTIVITY: `${SERVICE_NAME}_ACTIVITY`,
} as const;

type StorageKey = (typeof STORAGE_KEY)[keyof typeof STORAGE_KEY];
type StorageValue =
  | UserInfoFormDataSchema['userInfo']
  | ExperienceFormDataSchema['experiences']
  | ProjectsFormDataSchema['projects']
  | ActivitiesFormDataSchema['activities'];

export const storage = (key: StorageKey) => ({
  get: () => JSON.parse(localStorage.getItem(key) as string),
  set: (value: StorageValue) =>
    localStorage.setItem(key, JSON.stringify(value)),
  remove: () => localStorage.removeItem(key),
});
