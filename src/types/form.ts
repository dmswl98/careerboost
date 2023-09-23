import { z } from 'zod';

import { PLACEHOLDER } from '@/constants/form';

const PHONE_REGEX = /^\d{3}-\d{3,4}-\d{4}$/;
const DATE_REGEX = /^\d{4}\.\d{2}$/;

const NO_ENTERED_DATA = '내용을 작성해주세요';

export const resumeFormSchema = z.object({
  userInfo: z.object({
    name: z.string().min(1, { message: NO_ENTERED_DATA }),
    career: z.string().min(1, { message: NO_ENTERED_DATA }),
    phone: z.optional(z.string().regex(PHONE_REGEX)).or(z.literal('')),
    email: z.string().email({ message: NO_ENTERED_DATA }),
    blog: z.optional(z.string().url()).or(z.literal('')),
    github: z.string().url({ message: NO_ENTERED_DATA }),
    brief: z.optional(z.string()),
  }),
  experiences: z.array(
    z.object({
      id: z.string().uuid(),
      company: z.string().min(1),
      employmentType: z.union([
        z.literal('정규직'),
        z.literal('계약직'),
        z.literal('인턴'),
        z.string(),
      ]),
      jobTitle: z.string().min(1),
      startDate: z.string().regex(DATE_REGEX),
      endDate: z
        .string()
        .regex(DATE_REGEX)
        .or(z.literal(PLACEHOLDER.PERIOD.WORKING)),
      content: z.string().min(50, { message: '50자 이상 작성해주세요' }),
    })
  ),
  projects: z.array(
    z.object({
      id: z.string().uuid(),
      title: z.string().min(1),
      startDate: z.string().regex(DATE_REGEX),
      endDate: z
        .string()
        .regex(DATE_REGEX)
        .or(z.literal(PLACEHOLDER.PERIOD.PROGRESS)),
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
      endDate: z
        .string()
        .regex(DATE_REGEX)
        .or(z.literal(PLACEHOLDER.PERIOD.PROGRESS)),
      content: z.string().min(1, { message: '내용을 작성해주세요' }),
    })
  ),
});

const userInfoFormSchema = resumeFormSchema.pick({ userInfo: true });
const experienceFormSchema = resumeFormSchema.pick({ experiences: true });
const projectFormSchema = resumeFormSchema.pick({ projects: true });
const activityFormSchema = resumeFormSchema.pick({ activities: true });

export type ResumeFormDataSchema = z.infer<typeof resumeFormSchema>;
export type UserInfoFormDataSchema = z.infer<typeof userInfoFormSchema>;
export type ExperienceFormDataSchema = z.infer<typeof experienceFormSchema>;
export type ProjectsFormDataSchema = z.infer<typeof projectFormSchema>;
export type ActivitiesFormDataSchema = z.infer<typeof activityFormSchema>;
