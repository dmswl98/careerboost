import {
  type Control,
  Controller,
  type FieldPath,
  type FieldValues,
  useWatch,
} from 'react-hook-form';
import ReactMarkdown from 'react-markdown';

import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Textarea } from './ui/textarea';

interface ContentInputProps<T extends FieldValues> {
  control: Control<T>;
  formName: FieldPath<T>;
  index: number;
  placeholder: string;
  error?: string;
}

const ContentInput = <T extends FieldValues>({
  control,
  formName,
  index,
  placeholder,
  error,
}: ContentInputProps<T>) => {
  const value = useWatch({
    name: formName,
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
          name={`${formName}.${index}.content` as FieldPath<T>}
          render={({ field }) => (
            <div className="relative">
              <span className="absolute top-[-1.2rem] mb-[-0.25rem] text-xs text-slate-300">
                마크다운 문법을 지원합니다.
              </span>
              <Textarea
                id="content"
                className={`col-span-4 ${error ? 'border-red-300' : ''}`}
                placeholder={placeholder}
                {...field}
              />
            </div>
          )}
        />
        <div className="mt-1 flex justify-between">
          {error && <span className="text-xs text-red-300">{error}</span>}
          <span className="ml-auto text-xs text-slate-300">
            글자수 {value?.[index].content.length}
          </span>
        </div>
      </TabsContent>
      <TabsContent value="preview">
        {value && value?.[index].content ? (
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
