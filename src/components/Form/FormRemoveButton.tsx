import { TrashIcon } from 'lucide-react';

import { Button } from '@/components/common';

interface FormRemoveButtonProps {
  onRemoveForm: () => void;
}

const FormRemoveButton = ({ onRemoveForm }: FormRemoveButtonProps) => {
  return (
    <Button variant="outline" size="icon" type="button" onClick={onRemoveForm}>
      <TrashIcon className="m-3 text-gray-500" />
    </Button>
  );
};

export default FormRemoveButton;
