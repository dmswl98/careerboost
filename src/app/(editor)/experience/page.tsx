'use client';

import { useEffect } from 'react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { v4 } from 'uuid';

import { Input, Label } from '@/components/common';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/common/Select';
import {
  FormCard,
  FormRemoveButton,
  MarkdownInput,
  PeriodInput,
} from '@/components/Form';
import {
  EMPLOYMENT_TYPES,
  INITIAL_VALUE,
  PERIOD_LABEL,
  PLACEHOLDER,
} from '@/constants/form';
import { MENU_INFO } from '@/constants/menu';
import { type ExperienceFormDataSchema } from '@/types/form';
import { storage, STORAGE_KEY } from '@/utils/storage';

const webStorage = storage(STORAGE_KEY.EXPERIENCE);

const Page = () => {
  const {
    control,
    register,
    trigger,
    getValues,
    setValue,
    formState: { errors, dirtyFields },
  } = useFormContext<ExperienceFormDataSchema>();

  const { fields, append, remove } = useFieldArray({
    name: 'experiences',
    control,
  });

  useEffect(() => {
    const storageData = webStorage.get();

    setValue(
      'experiences',
      storageData ? storageData : [INITIAL_VALUE.EXPERIENCE]
    );
  }, [setValue]);

  const handleAppendClick = () => {
    append({
      ...INITIAL_VALUE.EXPERIENCE,
      id: v4(),
    });
  };

  const handleRemoveClick = (index: number) => {
    remove(index);

    const formValues = getValues('experiences');

    webStorage.set(formValues.length ? formValues : [INITIAL_VALUE.EXPERIENCE]);
  };

  const handleSaveClick = () => {
    trigger('experiences');

    const formValues = getValues('experiences');

    if (!dirtyFields.experiences || errors.experiences || !formValues.length) {
      return;
    }

    webStorage.set(formValues);
  };

  return (
    <FormCard
      title={MENU_INFO.EXPERIENCE.TITLE}
      guide={MENU_INFO.EXPERIENCE.GUIDE}
      onAppendForm={handleAppendClick}
      onSaveForm={handleSaveClick}
    >
      <ul>
        {fields.map((item, index) => (
          <li key={item.id} className="border-b border-gray-200/70 py-6">
            <div className="mb-3 flex items-end gap-2">
              <Input
                {...register(`experiences.${index}.company`)}
                id="title"
                className="mr-1"
                label={{ text: '회사명', isRequired: true }}
                placeholder={PLACEHOLDER.EXPERIENCE.COMPANY}
                error={errors.experiences?.[index]?.company?.message}
                autoFocus
              />
              <FormRemoveButton onRemoveForm={() => handleRemoveClick(index)} />
            </div>
            <div className="mb-3 flex flex-col gap-3 md:flex-row md:gap-2">
              <div className="flex-1">
                <Label htmlFor="employmentType" isRequired>
                  근무 형태
                </Label>
                <Controller
                  control={control}
                  name={`experiences.${index}.employmentType`}
                  render={({ field: { onChange, value } }) => (
                    <Select onValueChange={onChange} defaultValue={value}>
                      <SelectTrigger>
                        <SelectValue placeholder="근무 형태" />
                      </SelectTrigger>
                      <SelectContent>
                        {EMPLOYMENT_TYPES.map((employmentType) => (
                          <SelectItem
                            key={employmentType}
                            value={employmentType}
                          >
                            {employmentType}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div className="flex-1">
                <Input
                  {...register(`experiences.${index}.jobTitle`)}
                  id="jobTitle"
                  label={{ text: '직무', isRequired: true }}
                  placeholder={PLACEHOLDER.EXPERIENCE.JOB_TITLE}
                  error={errors.experiences?.[index]?.jobTitle?.message}
                />
              </div>
            </div>
            <PeriodInput
              formName="experiences"
              index={index}
              label={PERIOD_LABEL.WORKING}
              error={{
                startDate: errors.experiences?.[index]?.startDate?.message,
                endDate: errors.experiences?.[index]?.endDate?.message,
              }}
            />
            <MarkdownInput
              formName="experiences"
              index={index}
              label="내용"
              placeholder={PLACEHOLDER.EXPERIENCE.CONTENT}
              error={errors.experiences?.[index]?.content?.message}
            />
          </li>
        ))}
      </ul>
    </FormCard>
  );
};

export default Page;
