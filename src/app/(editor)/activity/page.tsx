'use client';

import { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { v4 } from 'uuid';

import { Input } from '@/components/common';
import { FormCard, MarkdownInput, PeriodInput } from '@/components/Form';
import FormRemoveButton from '@/components/Form/FormRemoveButton';
import { INITIAL_VALUE, PLACEHOLDER } from '@/constants/form';
import { MENU_INFO } from '@/constants/menu';
import { type ActivitiesFormDataSchema } from '@/types/form';
import { storage, STORAGE_KEY } from '@/utils/storage';

const webStorage = storage(STORAGE_KEY.ACTIVITY);

const Page = () => {
  const {
    control,
    register,
    trigger,
    getValues,
    setValue,
    formState: { errors, dirtyFields },
  } = useFormContext<ActivitiesFormDataSchema>();

  const { fields, append, remove } = useFieldArray({
    name: 'activities',
    control,
  });

  useEffect(() => {
    const storageData = webStorage.get();

    setValue(
      'activities',
      storageData ? storageData : [INITIAL_VALUE.ACTIVITY]
    );
  }, [setValue]);

  const handleAppendClick = () => {
    append({
      ...INITIAL_VALUE.ACTIVITY,
      id: v4(),
    });
  };

  const handleRemoveClick = (index: number) => {
    remove(index);

    const formValues = getValues('activities');

    webStorage.set(formValues.length ? formValues : [INITIAL_VALUE.ACTIVITY]);
  };

  const handleSaveClick = () => {
    trigger('activities');

    const formValues = getValues('activities');

    if (!dirtyFields.activities || errors.activities || !formValues.length) {
      return;
    }

    webStorage.set(formValues);
  };

  return (
    <FormCard
      title={MENU_INFO.ACTIVITY.TITLE}
      guide={MENU_INFO.ACTIVITY.GUIDE}
      onAppendForm={handleAppendClick}
      onSaveForm={handleSaveClick}
    >
      <ul>
        {fields.map((item, index) => (
          <li key={item.id} className="border-b border-gray-200/70 py-6">
            <div className="mb-3 flex items-end gap-2">
              <Input
                {...register(`activities.${index}.title`)}
                id="title"
                className="mr-1"
                label={{ text: '수상 및 활동명', isRequired: true }}
                placeholder={PLACEHOLDER.ACTIVITY.TITLE}
                error={errors.activities?.[index]?.title?.message}
                autoFocus
              />
              <FormRemoveButton onRemoveForm={() => handleRemoveClick(index)} />
            </div>
            <Input
              {...register(`activities.${index}.institution`)}
              id="title"
              className="mb-3"
              label={{ text: '기관명', isRequired: true }}
              placeholder={PLACEHOLDER.ACTIVITY.INSTITUTION}
            />
            <PeriodInput
              formName="activities"
              index={index}
              error={{
                startDate: errors.activities?.[index]?.startDate?.message,
                endDate: errors.activities?.[index]?.endDate?.message,
              }}
            />
            <MarkdownInput
              formName="activities"
              index={index}
              label="내용"
              placeholder={PLACEHOLDER.ACTIVITY.CONTENT}
              error={errors.activities?.[index]?.content?.message}
            />
          </li>
        ))}
      </ul>
    </FormCard>
  );
};

export default Page;
