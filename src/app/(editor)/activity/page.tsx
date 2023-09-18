'use client';

import { TrashIcon } from 'lucide-react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { v4 } from 'uuid';

import {
  Button,
  FormCard,
  Guide,
  Input,
  Label,
  MarkdownInput,
} from '@/components/common';
import { PeriodInput } from '@/components/Form';
import { INITIAL_VALUE, PLACEHOLDER } from '@/constants/form';
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

  const handleActivityFormRemove = (index: number) => {
    remove(index);
  };

  return (
    <FormCard title="수상 및 활동" onAppendForm={handleActivityFormAppend}>
      <Guide descrption="💡 활동에 참여한 동기와 어떤 역량을 키울 수 있었는지 구체적으로 작성하여 지속적인 성장 의지와 전문성을 강조해보세요" />
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
                placeholder={PLACEHOLDER.ACTIVITY.TITLE}
                isError={
                  !!(errors.activities && errors.activities[index]?.title)
                }
                className="mr-1"
                autoFocus
              />
              <Button
                variant="outline"
                size="icon"
                type="button"
                onClick={() => handleActivityFormRemove(index)}
              >
                <TrashIcon className="m-3 text-gray-500" />
              </Button>
            </div>
            <Label htmlFor="institution">기관명</Label>
            <Input
              {...register(`activities.${index}.institution`)}
              id="title"
              placeholder={PLACEHOLDER.ACTIVITY.INSTITUTION}
              className="mb-3"
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
