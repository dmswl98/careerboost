'use client';

import { TrashIcon } from 'lucide-react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { v4 } from 'uuid';
import { z } from 'zod';

import { ACTIVITY_PLACEHOLDER } from '@/constants/formPlaceholder';

import ContentInput from './ContentInput';
import FormCard from './Form/FormCard';
import { resumeFormSchema } from './Providers/FormProvider';
import { Button } from './ui/button';
import { Input } from './ui/input';

const activityFormSchema = resumeFormSchema.pick({ activities: true });

export type ActivitiesFormSchema = z.infer<typeof activityFormSchema>;

const ActivityForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<ActivitiesFormSchema>();

  const { fields, append, remove } = useFieldArray({
    name: 'activities',
    control,
  });

  const handleActivityFormAppend = () => {
    append({
      id: v4(),
      title: '',
      date: '',
      content: '',
    });
  };

  const handleActivityFormRemove = (index: number) => {
    remove(index);
  };

  return (
    <FormCard title="활동" onAppendForm={handleActivityFormAppend}>
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
                    className={`col-span-4 ${
                      errors.activities && errors.activities[index]?.title
                        ? 'border-b-red-300'
                        : ''
                    }`}
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
                onClick={() => handleActivityFormRemove(index)}
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
                    className={`col-span-4 ${
                      errors.activities && errors.activities[index]?.date
                        ? 'border-red-300'
                        : ''
                    }`}
                    placeholder={ACTIVITY_PLACEHOLDER.date}
                    {...field}
                  />
                )}
              />
            </div>
            <ContentInput
              control={control}
              formName="activities"
              index={index}
              placeholder={ACTIVITY_PLACEHOLDER.content}
            />
          </li>
        ))}
      </ul>
    </FormCard>
  );
};

export default ActivityForm;
