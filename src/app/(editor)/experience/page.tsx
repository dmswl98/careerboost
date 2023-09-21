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

const Page = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<ExperienceFormDataSchema>();

  const { fields, append, remove } = useFieldArray({
    name: 'experiences',
    control,
  });

  const handleExperienceFormAppend = () => {
    append({
      ...INITIAL_VALUE.experience,
      id: v4(),
    });
  };

  return (
    <FormCard
      title={MENU_INFO.EXPERIENCE.TITLE}
      guide={MENU_INFO.EXPERIENCE.GUIDE}
      onAppendForm={handleExperienceFormAppend}
    >
      <ul>
        {fields.map((item, index) => (
          <li key={item.id} className="border-b border-gray-200/70 py-6">
            <Label htmlFor="title" isRequired>
              회사명
            </Label>
            <div className="mb-3 flex items-center justify-between">
              <Input
                {...register(`experiences.${index}.company`)}
                id="title"
                className="mr-1"
                placeholder={PLACEHOLDER.EXPERIENCE.COMPANY}
                isError={
                  !!(errors.experiences && errors.experiences[index]?.company)
                }
                autoFocus
              />
              <FormRemoveButton onRemoveForm={() => remove(index)} />
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
                <Label htmlFor="jobTitle" isRequired>
                  직무
                </Label>
                <Input
                  {...register(`experiences.${index}.jobTitle`)}
                  id="jobTitle"
                  placeholder={PLACEHOLDER.EXPERIENCE.JOB_TITLE}
                  isError={
                    !!(
                      errors.experiences && errors.experiences[index]?.jobTitle
                    )
                  }
                />
              </div>
            </div>
            <PeriodInput
              formName="experiences"
              index={index}
              label={PERIOD_LABEL.WORKING}
              isError={{
                startDate: !!(
                  errors.experiences && errors.experiences[index]?.startDate
                ),
                endDate: !!(
                  errors.experiences && errors.experiences[index]?.endDate
                ),
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
