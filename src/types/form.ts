import { z } from 'zod';

import { PLACEHOLDER } from '@/constants/form';

const PHONE_REGEX = /^\d{3}-\d{3,4}-\d{4}$/;
const DATE_REGEX = /^\d{4}\.\d{2}$/;

export const resumeFormSchema = z.object({
  userInfo: z.object({
    name: z.string().min(1),
    career: z.string().min(1),
    phone: z.optional(z.string().regex(PHONE_REGEX)).or(z.literal('')),
    email: z.string().email(),
    blog: z.optional(z.string().url()).or(z.literal('')),
    github: z.string().url(),
    brief: z.optional(z.string()),
  }),
  projects: z.array(
    z.object({
      id: z.string().uuid(),
      title: z.string().min(1),
      startDate: z.string().regex(DATE_REGEX),
      endDate: z.string().regex(DATE_REGEX).or(z.literal(PLACEHOLDER.IS_DOING)),
      content: z.string().min(50, { message: '50자 이상 작성해주세요' }),
      url: z.string().optional(),
    })
  ),
  activities: z.array(
    z.object({
      id: z.string().uuid(),
      title: z.string().min(1),
      institution: z.optional(z.string()),
      startDate: z.string().regex(DATE_REGEX),
      endDate: z.string().regex(DATE_REGEX).or(z.literal(PLACEHOLDER.IS_DOING)),
      content: z.string().min(1, { message: '내용을 작성해주세요' }),
    })
  ),
});

const userInfoFormSchema = resumeFormSchema.pick({ userInfo: true });
const projectFormSchema = resumeFormSchema.pick({ projects: true });
const activityFormSchema = resumeFormSchema.pick({ activities: true });

export type ResumeFormDataSchema = z.infer<typeof resumeFormSchema>;
export type UserInfoFormDataSchema = z.infer<typeof userInfoFormSchema>;
export type ProjectsFormDataSchema = z.infer<typeof projectFormSchema>;
export type ActivitiesFormDataSchema = z.infer<typeof activityFormSchema>;
