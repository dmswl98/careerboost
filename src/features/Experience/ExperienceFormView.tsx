'use client';

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
  ControlButtonGroup,
  FormCard,
  MarkdownInput,
  PeriodInput,
} from '@/components/Form';
import { EMPLOYMENT_TYPES, INITIAL_VALUE } from '@/constants/form';
import { type Dictionary } from '@/i18n/types';
import { type ExperienceFormDataSchema } from '@/types/form';
import { isBottomForm, isTopForm } from '@/utils/form';
import { debouncedUpdateStorage, storage } from '@/utils/storage';

interface ExperienceFormViewProps {
  dictionary: Dictionary;
}

const ExperienceFormView = ({ dictionary }: ExperienceFormViewProps) => {
  const {
    control,
    register,
    getValues,
    formState: { errors },
  } = useFormContext<ExperienceFormDataSchema>();

  const { fields, append, swap, remove } = useFieldArray({
    name: 'experiences',
    control,
  });

  const handleAppendClick = () => {
    append({
      ...INITIAL_VALUE.EXPERIENCE,
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
      experiences: getValues('experiences'),
    });
  };

  const handleAutoSave = () => {
    debouncedUpdateStorage('experiences', getValues('experiences'));
  };

  return (
    <FormCard
      title={dictionary.experience.section.title}
      guide={dictionary.experience.section.guide}
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
                {...register(`experiences.${index}.company`)}
                id={`title-${index}`}
                className="mb-3"
                label={{
                  text: dictionary.experience.label.company,
                  isRequired: true,
                }}
                placeholder={dictionary.experience.placeholder.company}
                error={errors.experiences?.[index]?.company?.message}
                onChange={(e) => {
                  register(`experiences.${index}.company`).onChange(e);
                  handleAutoSave();
                }}
              />
              <div className="mb-3 flex flex-col gap-3 md:flex-row md:gap-2">
                <div className="flex-1">
                  <Label htmlFor="employmentType" isRequired>
                    {dictionary.experience.label.employmentType}
                  </Label>
                  <Controller
                    control={control}
                    name={`experiences.${index}.employmentType`}
                    render={({ field: { onChange, value } }) => (
                      <Select
                        defaultValue={value}
                        onValueChange={(e) => {
                          onChange(e);
                          handleAutoSave();
                        }}
                      >
                        <SelectTrigger
                          error={
                            errors.experiences?.[index]?.employmentType?.message
                          }
                        >
                          <SelectValue
                            placeholder={
                              dictionary.experience.placeholder.employmentType
                            }
                          />
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
                    id={`jobTitle-${index}`}
                    label={{
                      text: dictionary.experience.label.jobTitle,
                      isRequired: true,
                    }}
                    placeholder={dictionary.experience.placeholder.jobTitle}
                    error={errors.experiences?.[index]?.jobTitle?.message}
                    onChange={(e) => {
                      register(`experiences.${index}.jobTitle`).onChange(e);
                      handleAutoSave();
                    }}
                  />
                </div>
              </div>
              <PeriodInput
                formName="experiences"
                index={index}
                label={dictionary.experience.label.period}
                error={{
                  startDate: errors.experiences?.[index]?.startDate?.message,
                  endDate: errors.experiences?.[index]?.endDate?.message,
                }}
              />
              <MarkdownInput
                formName="experiences"
                index={index}
                label={dictionary.experience.label.content}
                placeholder={dictionary.experience.placeholder.content}
                error={errors.experiences?.[index]?.content?.message}
                dictionary={dictionary.markdownInput}
              />
            </li>
          ))}
        </ul>
      )}
    </FormCard>
  );
};

export default ExperienceFormView;
