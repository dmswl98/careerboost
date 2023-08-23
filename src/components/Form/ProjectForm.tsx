'use client';

import { TrashIcon } from 'lucide-react';
import { Suspense, useState } from 'react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { v4 } from 'uuid';
import { z } from 'zod';

import { PROJECT_PLACEHOLDER } from '@/constants/formPlaceholder';

import Fallback from '../Fallback';
import IconChatGpt from '../Icon/IconChatGpt';
import { resumeFormSchema } from '../Providers/FormProvider';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import ContentInput from './ContentInput';
import FormCard from './FormCard';
import Suggestion from './Suggestion';

const projectFormSchema = resumeFormSchema.pick({ projects: true });

export type ProjectsFormSchema = z.infer<typeof projectFormSchema>;

const ProjectForm = () => {
  const [isSuggest, setIsSuggest] = useState<boolean[]>([]);

  const {
    control,
    trigger,
    getValues,
    formState: { errors },
  } = useFormContext<ProjectsFormSchema>();

  const { fields, append, remove } = useFieldArray({
    name: 'projects',
    control,
  });

  const handleProjectFormAppend = () => {
    append({
      id: v4(),
      title: '',
      startDate: '',
      endDate: '',
      content: '',
      url: '',
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
    trigger(`projects.${index}`);

    if (
      !getValues(`projects.${index}.content`).length ||
      errors.projects?.[index]
    ) {
      return;
    }

    setIsSuggest((prev) => {
      prev[index] = true;

      return prev;
    });
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
                    placeholder={PROJECT_PLACEHOLDER.title}
                    outline={false}
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
                <TrashIcon className="m-3 text-slate-500" />
              </Button>
              <Button
                className="bg-[#75ac9d99] hover:bg-[#75ac9d] disabled:bg-slate-300"
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
                    placeholder={PROJECT_PLACEHOLDER.date}
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
                    placeholder={PROJECT_PLACEHOLDER.date}
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
                    placeholder={PROJECT_PLACEHOLDER.url}
                    {...field}
                  />
                )}
              />
            </div>
            <ContentInput
              control={control}
              formName="projects"
              index={index}
              placeholder={PROJECT_PLACEHOLDER.content}
              error={errors.projects?.[index]?.content?.message}
            />
            {isSuggest[index] && (
              <div className="mt-6 rounded-md bg-[#75ac9d80] px-3 py-2">
                <Suspense fallback={<Fallback />}>
                  <Suggestion
                    id={getValues(`projects.${index}.id`)}
                    content={getValues(`projects.${index}.content`)}
                  />
                </Suspense>
              </div>
            )}
          </li>
        ))}
      </ul>
    </FormCard>
  );
};

export default ProjectForm;
