import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider as Provider, useForm } from 'react-hook-form';

import { INITIAL_VALUE } from '@/constants/form';
import { type ResumeFormDataSchema, resumeFormSchema } from '@/types/form';

const DEFAULT_USERINFO = INITIAL_VALUE.userInfo;
const DEFAULT_PROJECTS = [INITIAL_VALUE.project];
const DEFAULT_ACTIVITIES = [INITIAL_VALUE.activity];

const FormProvider = ({ children }: StrictPropsWithChildren) => {
  const methods = useForm<ResumeFormDataSchema>({
    mode: 'onChange',
    resolver: zodResolver(resumeFormSchema),
    defaultValues: {
      userInfo: DEFAULT_USERINFO,
      projects: DEFAULT_PROJECTS,
      activities: DEFAULT_ACTIVITIES,
    },
  });

  const onSubmit = (data: ResumeFormDataSchema) => {
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
