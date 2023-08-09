import { useQuery } from '@tanstack/react-query';

import { aiApi } from '@/apis/ai';

export const useGetSuggestion = (content: string) => {
  return useQuery({
    queryKey: ['getSuggestion', content],
    queryFn: () => aiApi.getSuggestion(content),
  });
};
