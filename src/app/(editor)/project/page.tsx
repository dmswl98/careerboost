'use client';

import { useCompletion } from 'ai/react';
import { useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { v4 } from 'uuid';

import { Button, Input } from '@/components/common';
import {
  AiSuggestion,
  FormCard,
  MarkdownInput,
  PeriodInput,
} from '@/components/Form';
import FormRemoveButton from '@/components/Form/FormRemoveButton';
import IconChatGpt from '@/components/Icon/IconChatGpt';
import { INITIAL_VALUE, PLACEHOLDER } from '@/constants/form';
import { MENU_INFO } from '@/constants/menu';
import { type ProjectsFormDataSchema } from '@/types/form';
import { storage } from '@/utils/storage';

const Page = () => {
  const [isSuggest, setIsSuggest] = useState<boolean[]>([]);

  const {
    control,
    register,
    trigger,
    getValues,
    formState: { errors },
  } = useFormContext<ProjectsFormDataSchema>();

  const { fields, append, remove } = useFieldArray({
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

  const handleSaveClick = () => {
    trigger('projects');

    if (errors.projects) {
      return;
    }

    storage.set({ ...storage.get(), projects: getValues('projects') });
  };

  return (
    <FormCard
      title={MENU_INFO.PROJECT.TITLE}
      guide={MENU_INFO.PROJECT.GUIDE}
      onAppendForm={handleAppendClick}
    >
      {fields.length > 0 && (
        <div className="mt-5">
          <ul>
            {fields.map((item, index) => (
              <li key={item.id} className="border-b border-gray-200/70 py-6">
                <div className="mb-3 flex items-end gap-1">
                  <Input
                    {...register(`projects.${index}.title`)}
                    id="title"
                    className="mr-1"
                    label={{ text: '프로젝트명', isRequired: true }}
                    placeholder={PLACEHOLDER.PROJECT.TITLE}
                    error={errors.projects?.[index]?.title?.message}
                  />
                  <FormRemoveButton
                    onRemoveForm={() => handleRemoveClick(index)}
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
                  id="url"
                  className="mb-3"
                  label={{ text: '프로젝트 주소' }}
                  placeholder={PLACEHOLDER.PROJECT.URL}
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
          <div className="ml-auto mt-4 w-fit">
            <Button type="button" onClick={handleSaveClick}>
              저장
            </Button>
          </div>
        </div>
      )}
    </FormCard>
  );
};

export default Page;
