'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { PlusCircle, TrashIcon } from 'lucide-react';
import { useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import ReactMarkdown from 'react-markdown';
import { v4 } from 'uuid';
import { z } from 'zod';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PROJECT_FORM_PLACEHOLDER } from '@/constants/project';

import IconChatGpt from './Icon/IconChatGpt';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const projectFormSchema = z.object({
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
    watch,
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
              <Tabs defaultValue="edit" className="w-full">
                <TabsList className="ml-auto grid w-[150px] grid-cols-2">
                  <TabsTrigger value="edit">수정</TabsTrigger>
                  <TabsTrigger value="preview">미리보기</TabsTrigger>
                </TabsList>
                <TabsContent value="edit">
                  <Controller
                    control={control}
                    name={`projects.${index}.content`}
                    render={({ field }) => (
                      <div className="relative">
                        <span className="absolute top-[-1.2rem] mb-[-0.25rem] text-xs text-slate-300">
                          마크다운 문법을 지원합니다.
                        </span>
                        <Textarea
                          id="content"
                          className={`col-span-4 ${
                            errors.projects &&
                            errors.projects[index]?.content?.message
                              ? 'border-red-300'
                              : ''
                          }`}
                          placeholder={PROJECT_FORM_PLACEHOLDER.content}
                          {...field}
                        />
                      </div>
                    )}
                  />
                  <div className="mt-1 flex justify-between">
                    {errors.projects && errors.projects[index]?.content && (
                      <span className="text-xs text-red-300">
                        {errors.projects[index]?.content?.message}
                      </span>
                    )}
                    <span className="ml-auto text-xs text-slate-300">
                      글자수 {watch(`projects.${index}.content`).length}
                    </span>
                  </div>
                </TabsContent>
                <TabsContent value="preview">
                  {watch(`projects.${index}.content`) ? (
                    <ReactMarkdown className="markdown min-h-[100px] px-[0.8rem] py-[0.55rem]">
                      {watch(`projects.${index}.content`)}
                    </ReactMarkdown>
                  ) : (
                    <div className="py-10 text-center text-sm text-slate-500">
                      작성된 내용이 없어요.
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default ProjectForm;
