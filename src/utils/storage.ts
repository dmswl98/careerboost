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

    if (
      [STORAGE_KEY.EXPERIENCE, STORAGE_KEY.PROJECT, STORAGE_KEY.ACTIVITY].find(
        (storageKey) => storageKey === key
      )
    ) {
      return storageData ? storageData : [INITIAL_VALUE[key]];
    }

    return storageData ? storageData : INITIAL_VALUE[key];
  },
  set: (key: StorageKey, value: StorageValue) => {
    if (
      Array.isArray(value) &&
      [STORAGE_KEY.EXPERIENCE, STORAGE_KEY.PROJECT, STORAGE_KEY.ACTIVITY].find(
        (storageKey) => storageKey === key
      )
    ) {
      const storageData = value.length ? value : [INITIAL_VALUE[key]];
      localStorage.setItem(key, JSON.stringify(storageData));

      return;
    }

    localStorage.setItem(key, JSON.stringify(value));
  },
  remove: (key: StorageKey) => localStorage.removeItem(key),
};
