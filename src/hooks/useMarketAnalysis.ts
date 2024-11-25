import { useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

interface AnalysisParams {
  industry: string;
  region: string;
  timeframe: number;
}

export function useMarketAnalysis() {
  const mutation = useMutation({
    mutationFn: (params: AnalysisParams) =>
      axios.post(`${API_URL}/market/analysis`, params).then(res => res.data),
  });

  return {
    analyze: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error,
    data: mutation.data,
  };
}