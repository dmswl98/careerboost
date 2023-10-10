'use client';

import { type FieldPath, useFormContext } from 'react-hook-form';

import { Checkbox, Input, Label } from '@/components/common';
import { FormErrorMessage } from '@/components/Form';
import { PERIOD_LABEL, PLACEHOLDER } from '@/constants/form';
import { type ResumeFormDataSchema } from '@/types/form';
import { debouncedUpdateStorage } from '@/utils/storage';

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

  const { register, watch, getValues, setValue, resetField } =
    useFormContext<ResumeFormDataSchema>();

  const isChecked =
    watch(`${formName}.${index}.endDate` as FieldPath<ResumeFormDataSchema>) ===
    PERIOD_INPUT_PLACEHOLDER;

  const handleCheckboxClick = (index: number) => {
    const endDateField =
      `${formName}.${index}.endDate` as FieldPath<ResumeFormDataSchema>;

    if (!watch(endDateField)) {
      setValue(endDateField, PERIOD_INPUT_PLACEHOLDER);
    } else {
      resetField(endDateField);
    }
  };

  const handleAutoSave = () => {
    debouncedUpdateStorage(
      formName as keyof ResumeFormDataSchema,
      getValues(formName as keyof ResumeFormDataSchema)
    );
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
            onChange={(e) => {
              register(
                `${formName}.${index}.startDate` as FieldPath<ResumeFormDataSchema>
              ).onChange(e);
              handleAutoSave();
            }}
          />
          <Input
            {...register(
              `${formName}.${index}.endDate` as FieldPath<ResumeFormDataSchema>
            )}
            id="endDate"
            placeholder={PLACEHOLDER.DATE}
            onChange={(e) => {
              register(
                `${formName}.${index}.endDate` as FieldPath<ResumeFormDataSchema>
              ).onChange(e);
              handleAutoSave();
            }}
          />
        </div>
        <Checkbox
          id={`isDoing-${index}`}
          label={label}
          checked={isChecked}
          onClick={() => {
            handleCheckboxClick(index);
            handleAutoSave();
          }}
        />
      </div>
    </>
  );
};

export default PeriodInput;
