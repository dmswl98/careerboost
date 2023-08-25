import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider as Provider, useForm } from 'react-hook-form';
import { z } from 'zod';

import { INITIAL_VALUE } from '@/constants/form';

export const resumeFormSchema = z.object({
  userInfo: z.object({
    name: z.string(),
    career: z.string(),
    brief: z.string(),
    phone: z.string(),
    email: z.string().email(),
    blog: z.string().url(),
    github: z.string().url(),
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

const DEFAULT_USERINFO = INITIAL_VALUE.userInfo;
const DEFAULT_PROJECTS = [INITIAL_VALUE.project];
const DEFAULT_ACTIVITIES = [INITIAL_VALUE.activity];

export type ResumeFormSchema = z.infer<typeof resumeFormSchema>;

const FormProvider = ({ children }: StrictPropsWithChildren) => {
  const methods = useForm<ResumeFormSchema>({
    mode: 'onChange',
    resolver: zodResolver(resumeFormSchema),
    defaultValues: {
      userInfo: DEFAULT_USERINFO,
      projects: DEFAULT_PROJECTS,
      activities: DEFAULT_ACTIVITIES,
    },
  });

  const onSubmit = (data: ResumeFormSchema) => {
    methods.trigger();
    console.log(data);
  };

  return (
    <Provider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} autoComplete="off">
        {children}
      </form>
    </Provider>
  );
};

export default FormProvider;
