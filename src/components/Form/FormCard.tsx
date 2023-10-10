import { PlusCircle } from 'lucide-react';

import { Button } from '@/components/common';

interface FormCardProps {
  title: string;
  guide?: string;
  onAppendForm?: () => void;
}

const FormCard = ({
  children,
  title,
  guide,
  onAppendForm,
}: StrictPropsWithChildren<FormCardProps>) => {
  return (
    <div className="h-fit w-full rounded-xl border border-gray-200/70 bg-white p-6 md:w-[800px] md:p-8">
      <div className="mb-3 flex justify-between">
        <h1 className="bg-white text-lg font-bold md:text-xl">{title}</h1>
        {onAppendForm && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={`${title} 작성 양식 추가`}
            onClick={onAppendForm}
          >
            <PlusCircle className="m-3" />
          </Button>
        )}
      </div>
      {guide && (
        <div className="whitespace-pre-line rounded-lg bg-gray-100 p-4 text-sm text-gray-600">
          {guide}
        </div>
      )}
      {children}
    </div>
  );
};

export default FormCard;
