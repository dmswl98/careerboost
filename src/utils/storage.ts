import { INITIAL_VALUE } from '@/constants/form';
import {
  type ActivitiesFormDataSchema,
  type ExperienceFormDataSchema,
  type ProjectsFormDataSchema,
  type UserInfoFormDataSchema,
} from '@/types/form';

export const STORAGE_KEY = {
  USER_INFO: 'USER_INFO',
  EXPERIENCE: 'EXPERIENCE',
  PROJECT: 'PROJECT',
  ACTIVITY: 'ACTIVITY',
} as const;

type StorageKey = keyof typeof STORAGE_KEY;
type StorageValue =
  | UserInfoFormDataSchema['userInfo']
  | ExperienceFormDataSchema['experiences']
  | ProjectsFormDataSchema['projects']
  | ActivitiesFormDataSchema['activities'];

export const storage = {
  get: (key: StorageKey) => {
    const storageData = JSON.parse(localStorage.getItem(key) as string);

    if (Array.isArray(storageData)) {
      return storageData.length ? storageData : [INITIAL_VALUE[key]];
    }

    return storageData ? storageData : INITIAL_VALUE[key];
  },
  set: (key: StorageKey, value: StorageValue) =>
    localStorage.setItem(key, JSON.stringify(value)),
  remove: (key: StorageKey) => localStorage.removeItem(key),
};
