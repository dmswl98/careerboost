import IconChatGpt from '../Icon/IconChatGpt';

interface AiSuggestionProps {
  aiSuggestion: string;
}

const AiSuggestion = ({ aiSuggestion }: AiSuggestionProps) => {
  return (
    <div className=" mt-6 rounded-md bg-ai/30 px-5 py-4">
      <div className="mb-3 flex justify-between">
        <div className="text-[15px] font-bold text-primary">
          AI가 첨삭한 내용은 다음과 같아요
        </div>
        <p className="text-xs font-semibold text-ai">
          첨삭 내용을 바탕으로 프로젝트 내용을 수정해보세요
        </p>
      </div>
      {aiSuggestion ? (
        <p className="py-0.5 text-sm text-primary">{aiSuggestion}</p>
      ) : (
        <div className="flex justify-center py-4">
          <IconChatGpt className="h-5 w-10 animate-[rotate_3s_ease-in-out_infinite]" />
        </div>
      )}
    </div>
  );
};

export default AiSuggestion;
