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
    <div className="w-[780px] rounded-xl border border-gray-200/70 bg-white p-8">
      <div className="mb-3 flex justify-between">
        <h1 className="bg-white text-xl font-bold">{title}</h1>
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
    </div>
  );
};

export default FormCard;
