import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider as Provider, useForm } from 'react-hook-form';
import { v4 } from 'uuid';
import { z } from 'zod';

export const resumeFormSchema = z.object({
  projects: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      startDate: z.string(),
      endDate: z.string(),
      content: z.string().min(50, { message: '50자 이상 작성해주세요.' }),
      url: z.string(),
    })
  ),
  activities: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      date: z.string(),
      content: z.string(),
    })
  ),
});

const DEFAULT_PROJECTS = [
  {
    id: v4(),
    title: '',
    startDate: '',
    endDate: '',
    content: '',
    url: '',
  },
];

const DEFAULT_ACTIVITIES = [
  {
    id: v4(),
    title: '',
    date: '',
    content: '',
  },
];

type ResumeFormSchema = z.infer<typeof resumeFormSchema>;

const FormProvider = ({ children }: StrictPropsWithChildren) => {
  const methods = useForm({
    mode: 'onChange',
    resolver: zodResolver(resumeFormSchema),
    defaultValues: {
      projects: DEFAULT_PROJECTS,
      activities: DEFAULT_ACTIVITIES,
    },
  });

  const onSubmit = (data: ResumeFormSchema) => {
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
