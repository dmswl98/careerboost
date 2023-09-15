'use client';

import { useCompletion } from 'ai/react';
import { TrashIcon } from 'lucide-react';
import { useState } from 'react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { v4 } from 'uuid';

import { INITIAL_VALUE, PLACEHOLDER } from '@/constants/form';
import { type ProjectsFormDataSchema } from '@/types/form';

import { Button, Input } from '../common';
import IconChatGpt from '../Icon/IconChatGpt';
import AiSuggestion from './AiSuggestion';
import ContentInput from './ContentInput';
import FormCard from './FormCard';

const ProjectForm = () => {
  const [isSuggest, setIsSuggest] = useState<boolean[]>([]);

  const {
    control,
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

    setIsSuggest((prev) => {
      prev.splice(index, 1);

      return prev;
    });
  };

  const handleSuggestClick = (index: number) => {
    trigger(`projects.${index}.content`);

    const projectContent = getValues(`projects.${index}.content`);

    if (!projectContent.length || errors.projects?.[index]) {
      return;
    }

    setIsSuggest((prev) => {
      prev[index] = true;

      return prev;
    });

    complete(projectContent);
  };

  return (
    <FormCard title="프로젝트" onAppendForm={handleProjectFormAppend}>
      <ul>
        {fields.map((item, index) => (
          <li key={item.id} className="border border-x-0 py-6">
            <div className="mb-3 flex items-center justify-between">
              <Controller
                control={control}
                name={`projects.${index}.title`}
                render={({ field }) => (
                  <Input
                    id="title"
                    className={`col-span-4 ${
                      errors.projects && errors.projects[index]?.title
                        ? 'border-b-red-300'
                        : ''
                    }`}
                    placeholder={PLACEHOLDER.PROJECT.TITLE}
                    {...field}
                  />
                )}
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
                className="bg-[#75ac9d99] hover:bg-[#75ac9d] disabled:bg-gray-300"
                size="icon"
                type="button"
                title="프로젝트에 관련된 내용을 자세하게 작성할수록 첨삭 퀄리티가 높아져요."
                onClick={() => handleSuggestClick(index)}
                disabled={isSuggest[index]}
              >
                <IconChatGpt />
              </Button>
            </div>
            <div className="mb-2 flex gap-2">
              <Controller
                control={control}
                name={`projects.${index}.startDate`}
                render={({ field }) => (
                  <Input
                    id="startDate"
                    className={`col-span-4 ${
                      errors.projects && errors.projects[index]?.startDate
                        ? 'border-red-300'
                        : ''
                    }`}
                    placeholder={PLACEHOLDER.PROJECT.DATE}
                    {...field}
                  />
                )}
              />
              <Controller
                control={control}
                name={`projects.${index}.endDate`}
                render={({ field }) => (
                  <Input
                    id="endDate"
                    className={`col-span-4 ${
                      errors.projects && errors.projects[index]?.endDate
                        ? 'border-red-300'
                        : ''
                    }`}
                    placeholder={PLACEHOLDER.PROJECT.DATE}
                    {...field}
                  />
                )}
              />
            </div>
            <div className="mb-4">
              <Controller
                control={control}
                name={`projects.${index}.url`}
                render={({ field }) => (
                  <Input
                    id="url"
                    className="col-span-4"
                    placeholder={PLACEHOLDER.PROJECT.URL}
                    {...field}
                  />
                )}
              />
            </div>
            <ContentInput
              formName="projects"
              index={index}
              placeholder={PLACEHOLDER.PROJECT.CONTENT}
              error={errors.projects?.[index]?.content?.message}
            />
            {isSuggest[index] && completion && (
              <div className="mt-6 rounded-md bg-[#75ac9d80] px-3 py-2">
                <AiSuggestion aiSuggestion={completion} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </FormCard>
  );
};

export default ProjectForm;
