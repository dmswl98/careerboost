'use client';

import { type FieldPath, useFormContext } from 'react-hook-form';

import { Checkbox, Input, Label } from '@/components/common';
import { PLACEHOLDER } from '@/constants/form';
import { type ResumeFormDataSchema } from '@/types/form';

interface PeriodError {
  startDate: boolean;
  endDate: boolean;
}

interface PeriodInputProps {
  formName: FieldPath<ResumeFormDataSchema>;
  index: number;
  isError: PeriodError;
}

const PeriodInput = ({ formName, index, isError }: PeriodInputProps) => {
  const { register, watch, setValue, resetField } =
    useFormContext<ResumeFormDataSchema>();

  const handleCheckboxClick = (index: number) => {
    const endDateField =
      `${formName}.${index}.endDate` as FieldPath<ResumeFormDataSchema>;

    if (!watch(endDateField)) {
      setValue(endDateField, PLACEHOLDER.IS_DOING);
    } else {
      resetField(endDateField);
    }
  };

  return (
    <>
      <Label htmlFor="startDate" isRequired>
        기간
      </Label>
      <div className="mb-3">
        <div className="mb-1 flex gap-2">
          <Input
            {...register(
              `${formName}.${index}.startDate` as FieldPath<ResumeFormDataSchema>
            )}
            id="startDate"
            placeholder={PLACEHOLDER.DATE}
            isError={isError.startDate}
          />
          <Input
            {...register(
              `${formName}.${index}.endDate` as FieldPath<ResumeFormDataSchema>
            )}
            id="endDate"
            placeholder={PLACEHOLDER.DATE}
            isError={isError.endDate}
          />
        </div>
        <Checkbox
          id={`isDoing-${index}`}
          label="아직 진행 중이에요"
          checked={
            watch(
              `${formName}.${index}.endDate` as FieldPath<ResumeFormDataSchema>
            ) === PLACEHOLDER.IS_DOING
          }
          onClick={() => handleCheckboxClick(index)}
        />
      </div>
    </>
  );
};

export default PeriodInput;
