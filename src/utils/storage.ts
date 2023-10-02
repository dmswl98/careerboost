import debounce from 'lodash/debounce';

import type { ResumeFormDataSchema } from '@/types/form';

const STORAGE_KEY = 'CAREERBOOST';
const DEBOUNCE_TIME = 500;

export const storage = {
  get: (): ResumeFormDataSchema =>
    JSON.parse(localStorage.getItem(STORAGE_KEY) as string),
  set: (value: ResumeFormDataSchema) =>
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value)),
  remove: () => localStorage.removeItem(STORAGE_KEY),
};

export const debouncedUpdateStorage = debounce(
  (
    key: keyof ResumeFormDataSchema,
    value:
      | ResumeFormDataSchema['userInfo']
      | ResumeFormDataSchema['experiences']
      | ResumeFormDataSchema['projects']
      | ResumeFormDataSchema['activities']
  ) => {
    storage.set({
      ...storage.get(),
      [key]: value,
    });
  },
  DEBOUNCE_TIME
);
