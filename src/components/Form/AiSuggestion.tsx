import { type Dictionary } from '@/i18n/types';

import IconChatGpt from '../Icon/IconChatGpt';

interface AiSuggestionProps {
  aiSuggestion: string;
  dictionary: Dictionary['aiSuggestion'];
}

const AiSuggestion = ({ aiSuggestion, dictionary }: AiSuggestionProps) => {
  return (
    <div className=" mt-6 rounded-md bg-ai/30 px-5 py-4">
      <div className="mb-3 flex justify-between">
        <div className="text-[15px] font-bold text-primary">
          {dictionary.title}
        </div>
        <p className="text-xs font-semibold text-ai">
          {dictionary.description}
        </p>
      </div>
      {aiSuggestion ? (
        <p className="whitespace-pre-line py-0.5 text-sm text-primary">
          {aiSuggestion}
        </p>
      ) : (
        <div className="flex justify-center py-4">
          <IconChatGpt className="h-5 w-10 animate-[rotate_3s_ease-in-out_infinite]" />
        </div>
      )}
    </div>
  );
};

export default AiSuggestion;
