import {
  type Control,
  Controller,
  type FieldErrors,
  FieldValues,
  useWatch,
} from 'react-hook-form';
import ReactMarkdown from 'react-markdown';

import { PROJECT_FORM_PLACEHOLDER } from '@/constants/project';

import { ProjectsFormSchema } from './ProjectForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Textarea } from './ui/textarea';

interface ContentInputProps<T extends FieldValues> {
  control: Control<T>;
  index: number;
  errors: FieldErrors<T>;
}

const ContentInput = ({
  control,
  index,
  errors,
}: ContentInputProps<ProjectsFormSchema>) => {
  const value = useWatch({
    name: 'projects',
    control,
  });

  return (
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
                  errors.projects && errors.projects[index]?.content?.message
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
            글자수 {value?.[index].content.length}
          </span>
        </div>
      </TabsContent>
      <TabsContent value="preview">
        {value?.[index].content ? (
          <ReactMarkdown className="markdown min-h-[100px] px-[0.8rem] py-[0.55rem] text-sm">
            {value?.[index].content}
          </ReactMarkdown>
        ) : (
          <div className="py-10 text-center text-sm text-slate-500">
            작성된 내용이 없어요.
          </div>
        )}
      </TabsContent>
    </Tabs>
  );
};

export default ContentInput;
