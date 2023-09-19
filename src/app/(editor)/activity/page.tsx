'use client';

import { useFieldArray, useFormContext } from 'react-hook-form';
import { v4 } from 'uuid';

import { Input, Label } from '@/components/common';
import { FormCard, MarkdownInput, PeriodInput } from '@/components/Form';
import FormRemoveButton from '@/components/Form/FormRemoveButton';
import { INITIAL_VALUE, PLACEHOLDER } from '@/constants/form';
import { MENU_INFO } from '@/constants/menu';
import { type ActivitiesFormDataSchema } from '@/types/form';

const Page = () => {
  const {
    control,
    register,
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

  return (
    <FormCard
      title={MENU_INFO.ACTIVITY.TITLE}
      guide={MENU_INFO.ACTIVITY.GUIDE}
      onAppendForm={handleActivityFormAppend}
    >
      <ul>
        {fields.map((item, index) => (
          <li key={item.id} className="border-b border-gray-200/70 py-6">
            <Label htmlFor="title" isRequired>
              수상 및 활동명
            </Label>
            <div className="mb-3 flex items-center justify-between">
              <Input
                {...register(`activities.${index}.title`)}
                id="title"
                className="mr-1"
                placeholder={PLACEHOLDER.ACTIVITY.TITLE}
                isError={
                  !!(errors.activities && errors.activities[index]?.title)
                }
                autoFocus
              />
              <FormRemoveButton onRemoveForm={() => remove(index)} />
            </div>
            <Label htmlFor="institution">기관명</Label>
            <Input
              {...register(`activities.${index}.institution`)}
              id="title"
              className="mb-3"
              placeholder={PLACEHOLDER.ACTIVITY.INSTITUTION}
            />
            <PeriodInput
              formName="activities"
              index={index}
              isError={{
                startDate: !!(
                  errors.activities && errors.activities[index]?.startDate
                ),
                endDate: !!(
                  errors.activities && errors.activities[index]?.endDate
                ),
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
