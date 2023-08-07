'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { TrashIcon } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import ReactMarkdown from 'react-markdown';
import { z } from 'zod';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { type Project, PROJECT_DEFAULT } from '@/store/project';

import IconChatGpt from './Icon/IconChatGpt';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
interface ProjectFromProps {
  projectId: string;
  onClick: (id: string) => void;
}

const schema = z.object({
  title: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  content: z.string().min(50, { message: '50자 이상 작성해주세요.' }),
  url: z.string().startsWith('https://'),
});

const ProjectForm = ({ projectId, onClick }: ProjectFromProps) => {
  const {
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Project>({
    resolver: zodResolver(schema),
    defaultValues: {
      ...PROJECT_DEFAULT,
      id: projectId,
    },
  });

  const watchContent = watch('content');

  const onSubmit = () => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="border border-x-0 py-6">
        <div className="mb-3 flex justify-between">
          <Controller
            control={control}
            name="title"
            render={({ field: { ref, onChange, value } }) => (
              <Input
                id="title"
                className="col-span-4"
                ref={ref}
                placeholder="프로젝트명"
                onChange={onChange}
                value={value || ''}
                outline={false}
              />
            )}
          />
          <Button
            variant="ghost"
            size="icon"
            type="button"
            className="mr-1"
            onClick={() => onClick(projectId)}
          >
            <TrashIcon className="m-3 text-slate-500" />
          </Button>
          <Button
            className="bg-[#75ac9d99] hover:bg-[#75ac9d]"
            size="icon"
            type="submit"
          >
            <IconChatGpt />
          </Button>
        </div>
        <div className="mb-2 flex gap-2">
          <Controller
            control={control}
            name="startDate"
            render={({ field: { ref, onChange, value } }) => (
              <Input
                id="startDate"
                className="col-span-4"
                ref={ref}
                placeholder="YYYY.MM"
                onChange={onChange}
                value={value || ''}
              />
            )}
          />
          <Controller
            control={control}
            name="endDate"
            render={({ field: { ref, onChange, value } }) => (
              <Input
                id="endDate"
                className="col-span-4"
                ref={ref}
                placeholder="YYYY.MM"
                onChange={onChange}
                value={value || ''}
              />
            )}
          />
        </div>
        <div className="mb-4">
          <Controller
            control={control}
            name="url"
            render={({ field: { ref, onChange, value } }) => (
              <Input
                id="url"
                className="col-span-4"
                ref={ref}
                placeholder="프로젝트 주소"
                onChange={onChange}
                value={value || ''}
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
              name="content"
              render={({ field: { ref, onChange, value } }) => (
                <div className="relative">
                  <span className="absolute top-[-1.2rem]  mb-[-0.25rem] text-xs text-slate-300">
                    마크다운 문법을 지원합니다.
                  </span>
                  <Textarea
                    id="content"
                    className={`col-span-4 ${
                      errors.content?.message ? 'border-red-300' : ''
                    }`}
                    ref={ref}
                    placeholder="프로젝트 내용과 본인의 역할, 기여도를 작성해보세요."
                    onChange={onChange}
                    value={value || ''}
                  />
                </div>
              )}
            />
            <div className="mt-1 flex justify-between">
              {errors.content?.message && (
                <span className="text-xs text-red-300">
                  {errors.content.message}
                </span>
              )}
              <span className="ml-auto text-xs text-slate-300">
                글자수 {watchContent.length || 0}
              </span>
            </div>
          </TabsContent>
          <TabsContent value="preview">
            {watchContent ? (
              <ReactMarkdown className="markdown min-h-[100px] px-[0.8rem] py-[0.55rem]">
                {watchContent}
              </ReactMarkdown>
            ) : (
              <div className="py-10 text-center text-sm text-slate-500">
                작성된 내용이 없어요.
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </form>
  );
};

export default ProjectForm;
