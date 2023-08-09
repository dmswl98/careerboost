import axios from 'axios';

export const aiApi = {
  getSuggestion: async (content: string): Promise<string[]> => {
    const response = await axios.post('/api/suggest', { content });
    const splitedSuggestion = response.data?.suggestion.split('\n') as string[];
    const validSuggestion = splitedSuggestion.filter((sug) => sug);

    return validSuggestion;
  },
};
