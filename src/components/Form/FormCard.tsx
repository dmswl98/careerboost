import { PlusCircle } from 'lucide-react';

import { Button } from '@/components/common';

interface FormCardProps {
  title: string;
  guide?: string;
  onAppendForm?: () => void;
  onSaveForm: () => void;
}

const FormCard = ({
  children,
  title,
  guide,
  onAppendForm,
  onSaveForm,
}: StrictPropsWithChildren<FormCardProps>) => {
  return (
    <div className="w-full rounded-xl border border-gray-200/70 bg-white p-6 md:w-[780px] md:p-8">
      <div className="mb-3 flex justify-between">
        <h1 className="bg-white text-lg font-bold md:text-xl">{title}</h1>
        {onAppendForm && (
          <Button
            variant="ghost"
            size="icon"
            type="button"
            onClick={onAppendForm}
          >
            <PlusCircle className="m-3" />
          </Button>
        )}
      </div>
      {guide && (
        <div className="mb-5 whitespace-pre-line rounded-lg bg-gray-100 p-4 text-sm text-gray-600">
          {guide}
        </div>
      )}
      {children}
      <div className="ml-auto mt-4 w-fit">
        <Button type="button" onClick={onSaveForm}>
          저장
        </Button>
      </div>
    </div>
  );
};

export default FormCard;
