'use client';

import { useFieldArray, useFormContext } from 'react-hook-form';
import { v4 } from 'uuid';

import { Input } from '@/components/common';
import {
  ControlButtonGroup,
  FormCard,
  MarkdownInput,
  PeriodInput,
} from '@/components/Form';
import { INITIAL_VALUE } from '@/constants/form';
import { type Dictionary } from '@/i18n/types';
import { type ActivitiesFormDataSchema } from '@/types/form';
import { isBottomForm, isTopForm } from '@/utils/form';
import { debouncedUpdateStorage, storage } from '@/utils/storage';

interface ActivityFormViewProps {
  dictionary: Dictionary;
}

const ActivityFormView = ({ dictionary }: ActivityFormViewProps) => {
  const {
    control,
    register,
    getValues,
    formState: { errors },
  } = useFormContext<ActivitiesFormDataSchema>();

  const { fields, append, swap, remove } = useFieldArray({
    name: 'activities',
    control,
  });

  const handleAppendClick = () => {
    append({
      ...INITIAL_VALUE.ACTIVITY,
      id: v4(),
    });
  };

  const handleUpClick = (index: number) => {
    swap(index, isTopForm(index) ? index : index - 1);
  };

  const handleDownClick = (index: number) => {
    swap(index, isBottomForm(index, fields.length - 1) ? index : index + 1);
  };

  const handleRemoveClick = (index: number) => {
    remove(index);

    storage.set({
      ...storage.get(),
      activities: getValues('activities'),
    });
  };

  const handleAutoSave = () => {
    debouncedUpdateStorage('activities', getValues('activities'));
  };

  return (
    <FormCard
      title={dictionary.activity.section.title}
      guide={dictionary.activity.section.guide}
      onAppendForm={handleAppendClick}
    >
      {fields.length > 0 && (
        <ul className="mt-5">
          {fields.map((item, index) => (
            <li key={item.id} className="border-b border-gray-200/70 py-6">
              <ControlButtonGroup
                isTop={isTopForm(index)}
                isBottom={isBottomForm(index, fields.length - 1)}
                onMoveUpForm={() => handleUpClick(index)}
                onMoveDownForm={() => handleDownClick(index)}
                onRemoveForm={() => handleRemoveClick(index)}
              />
              <Input
                {...register(`activities.${index}.title`)}
                id={`title-${index}`}
                className="mb-3"
                label={{
                  text: dictionary.activity.label.title,
                  isRequired: true,
                }}
                placeholder={dictionary.activity.placeholder.title}
                error={errors.activities?.[index]?.title?.message}
                onChange={(e) => {
                  register(`activities.${index}.title`).onChange(e);
                  handleAutoSave();
                }}
              />
              <Input
                {...register(`activities.${index}.institution`)}
                id={`institution-${index}`}
                className="mb-3"
                label={{ text: dictionary.activity.label.institution }}
                placeholder={dictionary.activity.placeholder.institution}
                onChange={(e) => {
                  register(`activities.${index}.institution`).onChange(e);
                  handleAutoSave();
                }}
              />
              <PeriodInput
                formName="activities"
                index={index}
                label={dictionary.activity.label.period}
                error={{
                  startDate: errors.activities?.[index]?.startDate?.message,
                  endDate: errors.activities?.[index]?.endDate?.message,
                }}
              />
              <MarkdownInput
                formName="activities"
                index={index}
                label={dictionary.activity.label.content}
                placeholder={dictionary.activity.placeholder.content}
                error={errors.activities?.[index]?.content?.message}
                dictionary={dictionary.markdownInput}
              />
            </li>
          ))}
        </ul>
      )}
    </FormCard>
  );
};

export default ActivityFormView;
