import { PlusCircle } from 'lucide-react';

import { Button } from '../ui/button';

interface FormCardProps {
  title: string;
  onAppendForm: () => void;
}

const FormCard = ({
  children,
  title,
  onAppendForm,
}: StrictPropsWithChildren<FormCardProps>) => {
  return (
    <div className="m-8">
      <div className="mb-4 flex items-center justify-between text-slate-500">
        <h1 className="text-xl font-bold">{title}</h1>
        <Button
          variant="ghost"
          size="icon"
          type="button"
          onClick={onAppendForm}
          aria-controls="radix-:R1mcq:"
        >
          <PlusCircle className="m-3" />
        </Button>
      </div>
      {children}
    </div>
  );
};

export default FormCard;
