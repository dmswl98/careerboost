'use client';

import { type FieldPath, useFormContext } from 'react-hook-form';

import { Checkbox, Input, Label } from '@/components/common';
import { FormErrorMessage } from '@/components/Form';
import { PERIOD_LABEL, PLACEHOLDER } from '@/constants/form';
import { type ResumeFormDataSchema } from '@/types/form';

type PeriodLabelType = (typeof PERIOD_LABEL)[keyof typeof PERIOD_LABEL];

interface PeriodErrorMessage {
  startDate?: string;
  endDate?: string;
}

interface PeriodInputProps {
  formName: FieldPath<ResumeFormDataSchema>;
  index: number;
  label?: PeriodLabelType;
  error?: PeriodErrorMessage;
}

const PeriodInput = ({
  formName,
  index,
  label = PERIOD_LABEL.PROGRESS,
  error,
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
      <div className="relative mb-3">
        {(error?.startDate || error?.endDate) && (
          <FormErrorMessage
            className="absolute bottom-[70px] right-0"
            message="기간을 올바르게 작성해주세요"
          />
        )}
        <div className="mb-1 flex flex-col gap-1 md:flex-row md:gap-2">
          <Input
            {...register(
              `${formName}.${index}.startDate` as FieldPath<ResumeFormDataSchema>
            )}
            id="startDate"
            placeholder={PLACEHOLDER.DATE}
          />
          <Input
            {...register(
              `${formName}.${index}.endDate` as FieldPath<ResumeFormDataSchema>
            )}
            id="endDate"
            placeholder={PLACEHOLDER.DATE}
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
