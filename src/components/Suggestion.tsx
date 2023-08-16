import { useGetSuggestion } from '@/hooks/queries/useGetSuggestion';

interface SuggestionProps {
  id: string;
  content: string;
}

const Suggestion = ({ id, content }: SuggestionProps) => {
  const { data: suggestions, isError } = useGetSuggestion(content);

  if (isError) {
    return <div>오류가 발생했어요!</div>;
  }

  return (
    <div className="px-2 py-2.5 text-slate-700">
      <div className="mb-3 flex justify-between font-bold">
        <div>🤖 AI가 첨삭한 내용은 다음과 같아요</div>
        <p className="text-xs text-slate-500">
          첨삭 내용을 바탕으로 프로젝트 내용을 수정해보세요
        </p>
      </div>
      {suggestions?.map((suggestion, index) => (
        <p key={`${id}-${index}`} className="py-0.5 text-sm">
          {suggestion}
        </p>
      ))}
    </div>
  );
};

export default Suggestion;
