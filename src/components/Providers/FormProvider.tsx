import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider as Provider, useForm } from 'react-hook-form';
import { v4 } from 'uuid';
import { z } from 'zod';

export const resumeFormSchema = z.object({
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
      date: z.string().regex(new RegExp('\\d{4}')),
      content: z.string().optional(),
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
