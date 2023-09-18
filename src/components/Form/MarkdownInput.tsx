'use client';

import { type FieldPath, useFormContext, useWatch } from 'react-hook-form';
import ReactMarkdown from 'react-markdown';

import { Label, Textarea } from '@/components/common';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/common/Tab';
import { type ResumeFormDataSchema } from '@/types/form';

import { FormErrorMessage } from '.';

interface MarkdownInputProps {
  formName: FieldPath<ResumeFormDataSchema>;
  index: number;
  label: string;
  placeholder: string;
  error?: string;
}

const MarkdownInput = ({
  formName,
  index,
  label,
  placeholder,
  error,
}: MarkdownInputProps) => {
  const { control, register } = useFormContext<ResumeFormDataSchema>();

  const value = useWatch({
    name: `${formName}.${index}.content` as FieldPath<ResumeFormDataSchema>,
    control,
  }) as string;

  return (
    <Tabs defaultValue="edit" className="w-full">
      <div className="flex items-end">
        <div className="mb-[-0.55rem]">
          <Label htmlFor="content" isRequired>
            {label}
          </Label>
          <span className="mb-1 ml-2 inline-block text-xs text-gray-300">
            마크다운 문법을 지원해요
          </span>
        </div>
        <TabsList className="ml-auto grid w-[150px] grid-cols-2">
          <TabsTrigger value="edit">수정</TabsTrigger>
          <TabsTrigger value="preview">미리보기</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="edit">
        <Textarea
          {...register(
            `${formName}.${index}.content` as FieldPath<ResumeFormDataSchema>
          )}
          id="content"
          className={`col-span-4 ${error ? 'border-red-300' : ''}`}
          placeholder={placeholder}
        />
        <div className="mt-1 flex justify-between">
          {error && <FormErrorMessage message={error} />}
          <span className="ml-auto text-xs text-gray-300">
            글자수 {value?.length || 0}
          </span>
        </div>
      </TabsContent>
      <TabsContent value="preview">
        {value ? (
          <ReactMarkdown className="markdown min-h-[100px] px-[0.8rem] py-[0.57rem] text-sm">
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

export default MarkdownInput;
