'use client';

import { useCompletion } from 'ai/react';
import { useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { v4 } from 'uuid';

import { Button, Input } from '@/components/common';
import {
  AiSuggestion,
  ButtonGroup,
  FormCard,
  MarkdownInput,
  PeriodInput,
} from '@/components/Form';
import IconChatGpt from '@/components/Icon/IconChatGpt';
import { INITIAL_VALUE, PLACEHOLDER } from '@/constants/form';
import { MENU_INFO } from '@/constants/menu';
import { type ProjectsFormDataSchema } from '@/types/form';
import { isBottomForm, isTopForm } from '@/utils/form';
import { debouncedUpdateStorage, storage } from '@/utils/storage';

const Page = () => {
  const [isSuggest, setIsSuggest] = useState<boolean[]>([]);

  const {
    control,
    register,
    trigger,
    getValues,
    formState: { errors },
  } = useFormContext<ProjectsFormDataSchema>();

  const { fields, append, swap, remove } = useFieldArray({
    name: 'projects',
    control,
  });

  const { complete, completion } = useCompletion({
    api: '/api/ai',
  });

  const handleAppendClick = () => {
    append({
      ...INITIAL_VALUE.PROJECT,
      id: v4(),
    });

    setIsSuggest((prev) => [...prev, false]);
  };

  const handleUpClick = (index: number) => {
    swap(index, isTopForm(index) ? index : index - 1);
  };

  const handleDownClick = (index: number) => {
    swap(index, isBottomForm(index, fields.length - 1) ? index : index + 1);
  };

  const handleRemoveClick = (index: number) => {
    remove(index);

    const newIsSuggest = isSuggest.slice().splice(index, 1);
    setIsSuggest(newIsSuggest);

    storage.set({
      ...storage.get(),
      activities: getValues('projects'),
    });
  };

  const handleSuggestClick = (index: number) => {
    trigger(`projects.${index}`);

    if (errors.projects?.[index]) {
      return;
    }

    const newIsSuggest = isSuggest.slice();
    newIsSuggest[index] = true;

    setIsSuggest(newIsSuggest);

    complete(getValues(`projects.${index}.content`));
  };

  const handleAutoSave = () => {
    debouncedUpdateStorage('projects', getValues('projects'));
  };

  return (
    <FormCard
      title={MENU_INFO.PROJECT.TITLE}
      guide={MENU_INFO.PROJECT.GUIDE}
      onAppendForm={handleAppendClick}
    >
      {fields.length > 0 && (
        <ul className="mt-5">
          {fields.map((item, index) => (
            <li key={item.id} className="border-b border-gray-200/70 py-6">
              <ButtonGroup
                isTop={isTopForm(index)}
                isBottom={isBottomForm(index, fields.length - 1)}
                onMoveUpForm={() => handleUpClick(index)}
                onMoveDownForm={() => handleDownClick(index)}
                onRemoveForm={() => handleRemoveClick(index)}
              />
              <div className="mb-3 flex items-end gap-1">
                <Input
                  {...register(`projects.${index}.title`)}
                  id={`title-${index}`}
                  className="mr-1"
                  label={{ text: '프로젝트명', isRequired: true }}
                  placeholder={PLACEHOLDER.PROJECT.TITLE}
                  error={errors.projects?.[index]?.title?.message}
                  onChange={(e) => {
                    register(`projects.${index}.title`).onChange(e);
                    handleAutoSave();
                  }}
                />
                <Button
                  size="icon"
                  type="button"
                  className="ml-1"
                  disabled={isSuggest[index]}
                  title="프로젝트에 관련된 내용을 자세하게 작성할수록 첨삭 퀄리티가 높아져요."
                  onClick={() => handleSuggestClick(index)}
                >
                  <IconChatGpt />
                </Button>
              </div>
              <PeriodInput
                formName="projects"
                index={index}
                error={{
                  startDate: errors.projects?.[index]?.startDate?.message,
                  endDate: errors.projects?.[index]?.endDate?.message,
                }}
              />
              <Input
                {...register(`projects.${index}.url`)}
                id={`url-${index}`}
                className="mb-3"
                label={{ text: '프로젝트 주소' }}
                placeholder={PLACEHOLDER.PROJECT.URL}
                error={errors.projects?.[index]?.url?.message}
                onChange={(e) => {
                  register(`projects.${index}.url`).onChange(e);
                  handleAutoSave();
                }}
              />
              <MarkdownInput
                formName="projects"
                index={index}
                label="프로젝트 내용"
                placeholder={PLACEHOLDER.PROJECT.CONTENT}
                error={errors.projects?.[index]?.content?.message}
              />
              {isSuggest[index] && completion && (
                <AiSuggestion aiSuggestion={completion} />
              )}
            </li>
          ))}
        </ul>
      )}
    </FormCard>
  );
};

export default Page;
