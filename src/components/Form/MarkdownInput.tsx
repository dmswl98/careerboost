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
import { type Dictionary } from '@/i18n/types';
import { type ResumeFormDataSchema } from '@/types/form';
import { debouncedUpdateStorage } from '@/utils/storage';

import { FormErrorMessage } from '.';

interface MarkdownInputProps {
  formName: FieldPath<ResumeFormDataSchema>;
  index: number;
  label: string;
  placeholder: string;
  error?: string;
  dictionary: Dictionary['markdownInput'];
}

const MarkdownInput = ({
  formName,
  index,
  label,
  placeholder,
  error,
  dictionary,
}: MarkdownInputProps) => {
  const { control, register, getValues } =
    useFormContext<ResumeFormDataSchema>();

  const value = useWatch({
    name: `${formName}.${index}.content` as FieldPath<ResumeFormDataSchema>,
    control,
  }) as string;

  const handleAutoSave = () => {
    debouncedUpdateStorage(
      formName as keyof ResumeFormDataSchema,
      getValues(formName as keyof ResumeFormDataSchema)
    );
  };

  return (
    <Tabs defaultValue="edit" className="w-full">
      <div className="flex items-end">
        <div className="mb-[-0.55rem]">
          <Label htmlFor={`content-${index}`} isRequired>
            {label}
          </Label>
          <span className="mb-2 block text-xs text-gray-300 min-[470px]:mb-1 min-[470px]:ml-2 min-[470px]:inline-block">
            {dictionary.info}
          </span>
        </div>
        <TabsList className="ml-auto grid w-[150px] grid-cols-2">
          <TabsTrigger value="edit">{dictionary.tabButton.edit}</TabsTrigger>
          <TabsTrigger value="preview">
            {dictionary.tabButton.preview}
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="edit">
        <Textarea
          {...register(
            `${formName}.${index}.content` as FieldPath<ResumeFormDataSchema>
          )}
          id={`content-${index}`}
          className={`col-span-4 ${error ? 'border-red-300' : ''}`}
          placeholder={placeholder}
          aria-errormessage={error}
          onChange={(e) => {
            register(
              `${formName}.${index}.content` as FieldPath<ResumeFormDataSchema>
            ).onChange(e);
            handleAutoSave();
          }}
        />
        <div className="mt-1 flex justify-between">
          {error && <FormErrorMessage id="content" message={error} />}
          <span className="ml-auto text-xs text-gray-300">
            {value?.length || 0}
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
            {dictionary.tabContent}
          </div>
        )}
      </TabsContent>
    </Tabs>
  );
};

export default MarkdownInput;
