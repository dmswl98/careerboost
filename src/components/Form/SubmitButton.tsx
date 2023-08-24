import { Button } from '../ui/button';

const SubmitButton = () => {
  return (
    <div className="fixed bottom-0 left-0 flex w-full justify-end border-t border-solid border-slate-200 bg-white px-6 py-4">
      <Button variant="ghost" type="submit">
        📁 PDF 이력서
      </Button>
    </div>
  );
};

export default SubmitButton;
