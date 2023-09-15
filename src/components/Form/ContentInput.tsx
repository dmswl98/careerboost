import {
  Controller,
  type FieldPath,
  useFormContext,
  useWatch,
} from 'react-hook-form';
import ReactMarkdown from 'react-markdown';

import { type ResumeFormDataSchema } from '@/types/form';

import { Textarea } from '../common';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

interface ContentInputProps {
  formName: FieldPath<ResumeFormDataSchema>;
  index: number;
  placeholder: string;
  error?: string;
}

const ContentInput = ({
  formName,
  index,
  placeholder,
  error,
}: ContentInputProps) => {
  const { control } = useFormContext<ResumeFormDataSchema>();

  const value = useWatch({
    name: `${formName}.${index}.content` as FieldPath<ResumeFormDataSchema>,
    control,
  }) as string;

  return (
    <Tabs defaultValue="edit" className="w-full">
      <TabsList className="ml-auto grid w-[150px] grid-cols-2">
        <TabsTrigger value="edit">수정</TabsTrigger>
        <TabsTrigger value="preview">미리보기</TabsTrigger>
      </TabsList>
      <TabsContent value="edit">
        <Controller
          control={control}
          name={
            `${formName}.${index}.content` as FieldPath<ResumeFormDataSchema>
          }
          render={({ field }) => (
            <div className="relative">
              <span className="absolute top-[-1.2rem] mb-[-0.25rem] text-xs text-gray-300">
                마크다운 문법을 지원해요
              </span>
              <Textarea
                id="content"
                className={`col-span-4 ${error ? 'border-red-300' : ''}`}
                placeholder={placeholder}
                ref={field.ref}
                onChange={field.onChange}
                value={field.value as string}
              />
            </div>
          )}
        />
        <div className="mt-1 flex justify-between">
          {error && <span className="text-xs text-red-300">{error}</span>}
          <span className="ml-auto text-xs text-gray-300">
            글자수 {value?.length || 0}
          </span>
        </div>
      </TabsContent>
      <TabsContent value="preview">
        {value ? (
          <ReactMarkdown className="markdown min-h-[100px] px-[0.8rem] py-[0.55rem] text-sm">
            {value as string}
          </ReactMarkdown>
        ) : (
          <div className="py-10 text-center text-sm text-gray-500">
            작성된 내용이 없어요
          </div>
        )}
      </TabsContent>
    </Tabs>
  );
};

export default ContentInput;
