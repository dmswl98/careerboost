import { ChevronDown, ChevronUp, X } from 'lucide-react';

import { Button } from '@/components/common';

interface ControlButtonGroupProps {
  isTop: boolean;
  isBottom: boolean;
  onMoveUpForm: () => void;
  onMoveDownForm: () => void;
  onRemoveForm: () => void;
}

const ControlButtonGroup = ({
  isTop,
  isBottom,
  onMoveUpForm,
  onMoveDownForm,
  onRemoveForm,
}: ControlButtonGroupProps) => {
  return (
    <div className="mb-1 flex items-center justify-between">
      <div className="flex items-center">
        <Button
          type="button"
          className="mr-0.5 h-6 w-6"
          disabled={isTop}
          variant="outline"
          size="icon"
          aria-label="위로 이동"
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
          aria-label="아래로 이동"
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
        aria-label="삭제"
        onClick={onRemoveForm}
      >
        <X className="m-1 text-gray-500" />
      </Button>
    </div>
  );
};

export default ControlButtonGroup;
