'use client';

import { useCompletion } from 'ai/react';
import { TrashIcon } from 'lucide-react';
import { useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { v4 } from 'uuid';

import {
  Button,
  FormCard,
  Guide,
  Input,
  Label,
  MarkdownInput,
} from '@/components/common';
import { AiSuggestion, PeriodInput } from '@/components/Form';
import IconChatGpt from '@/components/Icon/IconChatGpt';
import { INITIAL_VALUE, PLACEHOLDER } from '@/constants/form';
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
    api: '/api/suggest',
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
    <FormCard title="프로젝트" onAppendForm={handleProjectFormAppend}>
      <Guide descrption="💡 단순히 어떤 기술을 사용했다는 것보다 해당 프로젝트에서 마주친 문제를 해결한 과정과 배운 점, 결과 등을 강조해보세요" />
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
                placeholder={PLACEHOLDER.PROJECT.TITLE}
                isError={!!(errors.projects && errors.projects[index]?.title)}
                className="mr-1"
                autoFocus
              />
              <Button
                variant="ghost"
                size="icon"
                type="button"
                className="mr-1"
                onClick={() => handleProjectFormRemove(index)}
              >
                <TrashIcon className="m-3 text-gray-500" />
              </Button>
              <Button
                size="icon"
                type="button"
                title="프로젝트에 관련된 내용을 자세하게 작성할수록 첨삭 퀄리티가 높아져요."
                onClick={() => handleSuggestClick(index)}
                disabled={isSuggest[index]}
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
