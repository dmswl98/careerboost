import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider as Provider, useForm } from 'react-hook-form';

import { INITIAL_VALUE } from '@/constants/form';
import { type ResumeFormDataSchema, resumeFormSchema } from '@/types/form';

const FORM_DEFAULT_VALUES = {
  userInfo: INITIAL_VALUE.USER_INFO,
  experiences: [INITIAL_VALUE.EXPERIENCE],
  projects: [INITIAL_VALUE.PROJECT],
  activities: [INITIAL_VALUE.ACTIVITY],
};

const FormProvider = ({ children }: StrictPropsWithChildren) => {
  const methods = useForm<ResumeFormDataSchema>({
    mode: 'onChange',
    resolver: zodResolver(resumeFormSchema),
    defaultValues: FORM_DEFAULT_VALUES,
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
