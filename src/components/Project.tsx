'use client';

import { PlusCircle } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import ReactMarkdown from 'react-markdown';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const PROJECT_DEFAULT = {
  title: '',
  startDate: '',
  endDate: '',
  content: '',
  url: '',
};

interface Project {
  title: string;
  startDate: string;
  endDate: string;
  content: string;
  url: string;
}

const Project = () => {
  const { watch, control, handleSubmit } = useForm<Project>({
    defaultValues: PROJECT_DEFAULT,
  });

  const watchContent = watch('content');

  const onSubmit = (data: Project) => {
    console.log(data);
  };

  return (
    <div className="m-8">
      <div className="mb-4 flex items-center justify-between text-slate-500">
        <h1 className="text-xl font-bold ">프로젝트</h1>
        <Button variant="ghost" size="icon">
          <PlusCircle className="m-3" />
        </Button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="border border-x-0 py-6">
          <div className="mb-3">
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
                  <Textarea
                    id="content"
                    className="col-span-4"
                    ref={ref}
                    placeholder="프로젝트 내용과 본인의 역할, 기여도를 작성해보세요."
                    onChange={onChange}
                    value={value || ''}
                  />
                )}
              />
              <div className="mt-1 flex justify-between">
                <span className="text-xs text-slate-300">
                  마크다운 문법을 지원합니다.
                </span>
                <span className="text-xs text-slate-300">
                  글자수 {watchContent.length || 0}
                </span>
              </div>
            </TabsContent>
            <TabsContent value="preview">
              {watchContent ? (
                <ReactMarkdown className="markdown">
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
    </div>
  );
};

export default Project;
