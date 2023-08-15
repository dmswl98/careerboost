'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { PlusCircle, TrashIcon } from 'lucide-react';
import { useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { v4 } from 'uuid';
import { z } from 'zod';

import { PROJECT_FORM_PLACEHOLDER } from '@/constants/project';

import ContentInput from './ContentInput';
import IconChatGpt from './Icon/IconChatGpt';
import { Button } from './ui/button';
import { Input } from './ui/input';

export const projectFormSchema = z.object({
  projects: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      startDate: z.string(),
      endDate: z.string(),
      content: z.string().min(50, { message: '50자 이상 작성해주세요.' }),
      url: z.string(),
    })
  ),
});

export type ProjectsFormSchema = z.infer<typeof projectFormSchema>;

export type ProjectFormSchema = z.infer<
  typeof projectFormSchema
>['projects'][number];

const DEFAULT_PROJECTS: ProjectFormSchema[] = [
  {
    id: v4(),
    title: '',
    startDate: '',
    endDate: '',
    content: '',
    url: '',
  },
];

const ProjectForm = () => {
  const [projects, setProjects] =
    useState<ProjectFormSchema[]>(DEFAULT_PROJECTS);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: zodResolver(projectFormSchema),
    defaultValues: { projects },
  });

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
  };

  const handleProjectFormRemove = (index: number) => {
    remove(index);
  };

  const onSubmit = (data: { projects: ProjectFormSchema[] }) => {
    setProjects(data.projects);
  };

  console.log('render');

  return (
    <div>
      <div className="mb-4 flex items-center justify-between text-slate-500">
        <h1 className="text-xl font-bold">프로젝트</h1>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            handleProjectFormAppend();
            console.log(projects);
          }}
          aria-controls="radix-:R1mcq:"
        >
          <PlusCircle className="m-3" />
        </Button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul>
          {fields.map((item, index) => (
            <li key={item.id} className="border border-x-0 py-6">
              <div className="mb-3 flex justify-between">
                <Controller
                  control={control}
                  name={`projects.${index}.title`}
                  render={({ field }) => (
                    <Input
                      id="title"
                      className="col-span-4"
                      placeholder={PROJECT_FORM_PLACEHOLDER.title}
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
                  type="submit"
                  title="프로젝트에 관련된 내용을 자세하게 작성할수록 첨삭 퀄리티가 높아져요."
                  // disabled={isSuggested}
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
                      className="col-span-4"
                      placeholder={PROJECT_FORM_PLACEHOLDER.date}
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
                      className="col-span-4"
                      placeholder={PROJECT_FORM_PLACEHOLDER.date}
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
                      placeholder={PROJECT_FORM_PLACEHOLDER.url}
                      {...field}
                    />
                  )}
                />
              </div>
              <ContentInput control={control} index={index} errors={errors} />
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default ProjectForm;
