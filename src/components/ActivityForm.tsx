'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { TrashIcon } from 'lucide-react';
import { useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { v4 } from 'uuid';
import { z } from 'zod';

import { ACTIVITY_PLACEHOLDER } from '@/constants/formPlaceholder';

import ContentInput from './ContentInput';
import FormCard from './Form/FormCard';
import { Button } from './ui/button';
import { Input } from './ui/input';

export const activityFormSchema = z.object({
  activities: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      date: z.string(),
      content: z.string(),
    })
  ),
});

export type ActivitiesFormSchema = z.infer<typeof activityFormSchema>;

export type ActivityFormSchema = z.infer<
  typeof activityFormSchema
>['activities'][number];

const DEFAULT_ACTIVITIES: ActivityFormSchema[] = [
  {
    id: v4(),
    title: '',
    date: '',
    content: '',
  },
];

const ActivityForm = () => {
  const [activities, setActivities] =
    useState<ActivityFormSchema[]>(DEFAULT_ACTIVITIES);

  const { control, handleSubmit } = useForm({
    mode: 'onChange',
    resolver: zodResolver(activityFormSchema),
    defaultValues: { activities },
  });

  const { fields, append, remove } = useFieldArray({
    name: 'activities',
    control,
  });

  const handleProjectFormAppend = () => {
    append({
      id: v4(),
      title: '',
      date: '',
      content: '',
    });
  };

  const handleProjectFormRemove = (index: number) => {
    remove(index);
  };

  const onSubmit = (data: { activities: ActivityFormSchema[] }) => {
    setActivities(data.activities);
  };

  return (
    <FormCard title="활동" onAppendForm={handleProjectFormAppend}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul>
          {fields.map((item, index) => (
            <li key={item.id} className="border border-x-0 py-6">
              <div className="mb-3 flex justify-between">
                <Controller
                  control={control}
                  name={`activities.${index}.title`}
                  render={({ field }) => (
                    <Input
                      id="title"
                      className="col-span-4"
                      placeholder={ACTIVITY_PLACEHOLDER.title}
                      outline={false}
                      {...field}
                    />
                  )}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  type="button"
                  className="mr-1"
                  onClick={() => handleProjectFormRemove(index)}
                >
                  <TrashIcon className="m-3 text-slate-500" />
                </Button>
              </div>
              <div className="mb-4 flex gap-2">
                <Controller
                  control={control}
                  name={`activities.${index}.date`}
                  render={({ field }) => (
                    <Input
                      id="date"
                      className="col-span-4"
                      placeholder={ACTIVITY_PLACEHOLDER.date}
                      {...field}
                    />
                  )}
                />
              </div>
              <ContentInput<ActivitiesFormSchema>
                control={control}
                formName="activities"
                index={index}
                placeholder={ACTIVITY_PLACEHOLDER.content}
              />
            </li>
          ))}
        </ul>
      </form>
    </FormCard>
  );
};

export default ActivityForm;
