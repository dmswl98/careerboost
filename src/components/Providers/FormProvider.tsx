import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { FormProvider as Provider, useForm } from 'react-hook-form';

import { INITIAL_VALUE } from '@/constants/form';
import { type ResumeFormDataSchema, resumeFormSchema } from '@/types/form';
import { storage } from '@/utils/storage';

const FormProvider = ({ children }: StrictPropsWithChildren) => {
  const methods = useForm<ResumeFormDataSchema>({
    mode: 'all',
    resolver: zodResolver(resumeFormSchema),
    defaultValues: {
      userInfo: INITIAL_VALUE.USER_INFO,
      experiences: [],
      projects: [],
      activities: [],
    },
  });

  useEffect(() => {
    const storageData = storage.get();

    if (!storageData) {
      return;
    }

    const { userInfo, experiences, projects, activities } = storageData;

    methods.setValue('userInfo', userInfo);
    methods.setValue('experiences', experiences);
    methods.setValue('projects', projects);
    methods.setValue('activities', activities);

    methods.trigger();
  }, [methods]);

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
