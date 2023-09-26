import type { ResumeFormDataSchema } from '@/types/form';

export const STORAGE_KEY = 'CAREERBOOST';

export const storage = {
  get: (): ResumeFormDataSchema =>
    JSON.parse(localStorage.getItem(STORAGE_KEY) as string),
  set: (value: ResumeFormDataSchema) =>
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value)),
  remove: () => localStorage.removeItem(STORAGE_KEY),
};
