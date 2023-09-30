import { ChevronDown, ChevronUp, X } from 'lucide-react';

import { Button } from '@/components/common';

interface ButtonGroupProps {
  isTop: boolean;
  isBottom: boolean;
  onMoveUpForm: () => void;
  onMoveDownForm: () => void;
  onRemoveForm: () => void;
}

const ButtonGroup = ({
  isTop,
  isBottom,
  onMoveUpForm,
  onMoveDownForm,
  onRemoveForm,
}: ButtonGroupProps) => {
  return (
    <div className="mb-1 flex items-center justify-between">
      <div>
        <Button
          type="button"
          className="mr-0.5 h-6 w-6"
          disabled={isTop}
          variant="outline"
          size="icon"
          onClick={onMoveUpForm}
        >
          <ChevronUp className="m-1 text-gray-500" />
        </Button>
        <Button
          type="button"
          className="mr-1 h-6 w-6"
          disabled={isBottom}
          variant="outline"
          size="icon"
          onClick={onMoveDownForm}
        >
          <ChevronDown className="m-1 text-gray-500" />
        </Button>
      </div>
      <Button
        type="button"
        className="h-6 w-6"
        variant="outline"
        size="icon"
        onClick={onRemoveForm}
      >
        <X className="m-1 text-gray-500" />
      </Button>
    </div>
  );
};

export default ButtonGroup;
