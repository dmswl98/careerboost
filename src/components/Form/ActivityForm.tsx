'use client';

import { TrashIcon } from 'lucide-react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { v4 } from 'uuid';

import { INITIAL_VALUE, PLACEHOLDER } from '@/constants/form';
import { type ActivitiesFormDataSchema } from '@/types/form';

import { Button, FormCard, Input, MarkdownInput } from '../common';

const ActivityForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<ActivitiesFormDataSchema>();

  const { fields, append, remove } = useFieldArray({
    name: 'activities',
    control,
  });

  const handleActivityFormAppend = () => {
    append({
      ...INITIAL_VALUE.activity,
      id: v4(),
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
                    placeholder={PLACEHOLDER.ACTIVITY.TITLE}
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
                <TrashIcon className="m-3 text-gray-500" />
              </Button>
            </div>
            <div className="mb-4 flex gap-2">
              <Controller
                control={control}
                name={`activities.${index}.startDate`}
                render={({ field }) => (
                  <Input
                    id="startDate"
                    className={`col-span-4 ${
                      errors.activities && errors.activities[index]?.startDate
                        ? 'border-red-300'
                        : ''
                    }`}
                    placeholder={PLACEHOLDER.ACTIVITY.DATE}
                    {...field}
                  />
                )}
              />
              <Controller
                control={control}
                name={`activities.${index}.endDate`}
                render={({ field }) => (
                  <Input
                    id="endDate"
                    className={`col-span-4 ${
                      errors.activities && errors.activities[index]?.endDate
                        ? 'border-red-300'
                        : ''
                    }`}
                    placeholder={PLACEHOLDER.ACTIVITY.DATE}
                    {...field}
                  />
                )}
              />
            </div>
            <MarkdownInput
              label="활동 내용"
              formName="activities"
              index={index}
              placeholder={PLACEHOLDER.ACTIVITY.CONTENT}
            />
          </li>
        ))}
      </ul>
    </FormCard>
  );
};

export default ActivityForm;
