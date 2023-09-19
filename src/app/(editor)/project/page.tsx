'use client';

import { useCompletion } from 'ai/react';
import { useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { v4 } from 'uuid';

import { Button, Input, Label } from '@/components/common';
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

  const handleProjectFormAppend = () => {
    append({
      ...INITIAL_VALUE.project,
      id: v4(),
    });

    setIsSuggest((prev) => [...prev, false]);
  };

  const handleProjectFormRemove = (index: number) => {
    remove(index);

    const newIsSuggest = isSuggest.slice().splice(index, 1);
    setIsSuggest(newIsSuggest);
  };

  const handleSuggestClick = (index: number) => {
    trigger(`projects.${index}`);

    const { title, startDate, endDate, content } = getValues(
      `projects.${index}`
    );

    if (
      !title ||
      !startDate ||
      !endDate ||
      !content ||
      errors.projects?.[index]
    ) {
      return;
    }

    const newIsSuggest = isSuggest.slice();
    newIsSuggest[index] = true;

    setIsSuggest(newIsSuggest);

    complete(content);
  };

  return (
    <FormCard
      title={MENU_INFO.PROJECT.TITLE}
      guide={MENU_INFO.PROJECT.GUIDE}
      onAppendForm={handleProjectFormAppend}
    >
      <ul>
        {fields.map((item, index) => (
          <li key={item.id} className="border-b border-gray-200/70 py-6">
            <Label htmlFor="title" isRequired>
              프로젝트명
            </Label>
            <div className="mb-3 flex items-center justify-between">
              <Input
                {...register(`projects.${index}.title`)}
                id="title"
                className="mr-1"
                placeholder={PLACEHOLDER.PROJECT.TITLE}
                isError={!!(errors.projects && errors.projects[index]?.title)}
                autoFocus
              />
              <FormRemoveButton
                onRemoveForm={() => handleProjectFormRemove(index)}
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
              isError={{
                startDate: !!(
                  errors.projects && errors.projects[index]?.startDate
                ),
                endDate: !!(errors.projects && errors.projects[index]?.endDate),
              }}
            />
            <Label htmlFor="url">프로젝트 주소</Label>
            <Input
              {...register(`projects.${index}.url`)}
              id="url"
              placeholder={PLACEHOLDER.PROJECT.URL}
              className="mb-3"
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
    </FormCard>
  );
};

export default Page;
