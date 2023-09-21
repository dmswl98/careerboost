'use client';

import { type FieldPath, useFormContext } from 'react-hook-form';

import { Checkbox, Input, Label } from '@/components/common';
import { PERIOD_LABEL, PLACEHOLDER } from '@/constants/form';
import { type ResumeFormDataSchema } from '@/types/form';

type PeriodLabelType = (typeof PERIOD_LABEL)[keyof typeof PERIOD_LABEL];

interface PeriodError {
  startDate: boolean;
  endDate: boolean;
}

interface PeriodInputProps {
  formName: FieldPath<ResumeFormDataSchema>;
  index: number;
  label?: PeriodLabelType;
  isError: PeriodError;
}

const PeriodInput = ({
  formName,
  index,
  label = PERIOD_LABEL.PROGRESS,
  isError,
}: PeriodInputProps) => {
  const PERIOD_INPUT_PLACEHOLDER =
    label === PERIOD_LABEL.PROGRESS
      ? PLACEHOLDER.PERIOD.PROGRESS
      : PLACEHOLDER.PERIOD.WORKING;

  const { register, watch, setValue, resetField } =
    useFormContext<ResumeFormDataSchema>();

  const handleCheckboxClick = (index: number) => {
    const endDateField =
      `${formName}.${index}.endDate` as FieldPath<ResumeFormDataSchema>;

    if (!watch(endDateField)) {
      setValue(endDateField, PERIOD_INPUT_PLACEHOLDER);
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
        <div className="mb-1 flex flex-col gap-1 md:flex-row md:gap-2">
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
          label={label}
          checked={
            watch(
              `${formName}.${index}.endDate` as FieldPath<ResumeFormDataSchema>
            ) === PERIOD_INPUT_PLACEHOLDER
          }
          onClick={() => handleCheckboxClick(index)}
        />
      </div>
    </>
  );
};

export default PeriodInput;
