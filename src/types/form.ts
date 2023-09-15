import { z } from 'zod';

export const resumeFormSchema = z.object({
  userInfo: z.object({
    name: z.string().min(1),
    career: z.string().min(1),
    phone: z
      .optional(z.string().regex(/^\d{3}-\d{3,4}-\d{4}$/))
      .or(z.literal('')),
    email: z.string().email(),
    blog: z.optional(z.string().url()).or(z.literal('')),
    github: z.string().url(),
    brief: z.optional(z.string()),
  }),
  projects: z.array(
    z.object({
      id: z.string().uuid(),
      title: z.string().min(1),
      startDate: z.string().regex(new RegExp('\\d{4}\\.\\d{2}')),
      endDate: z.string().regex(new RegExp('\\d{4}\\.\\d{2}')),
      content: z.string().min(50, { message: '50자 이상 작성해주세요' }),
      url: z.string().optional(),
    })
  ),
  activities: z.array(
    z.object({
      id: z.string().uuid(),
      title: z.string().min(1),
      startDate: z.string().regex(new RegExp('\\d{4}\\.\\d{2}')),
      endDate: z.string().regex(new RegExp('\\d{4}\\.\\d{2}')),
      content: z.string().optional(),
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
