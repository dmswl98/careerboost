import { useGetSuggestion } from '@/hooks/queries/useGetSuggestion';

interface SuggestionProps {
  content: string;
}

const Suggestion = ({ content }: SuggestionProps) => {
  const { data: suggestions, isError } = useGetSuggestion(content);

  if (isError) {
    return <div>오류가 발생했어요!</div>;
  }

  return (
    <div className="p-1 text-slate-700">
      <div className="mb-2 font-bold">AI가 첨삭한 내용은 다음과 같아요.</div>
      {suggestions?.map((suggestion) => <p key={suggestion}>{suggestion}</p>)}
    </div>
  );
};

export default Suggestion;
