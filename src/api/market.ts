import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export async function fetchMarketAnalysis(params: {
  industry: string;
  region: string;
  timeframe: number;
}) {
  const response = await axios.post(`${API_URL}/market/analysis`, params);
  return response.data;
}

export async function fetchEconomicIndicators(region: string) {
  const response = await axios.get(`${API_URL}/market/economic/${region}`);
  return response.data;
}

export async function fetchMarketSegments(industry: string) {
  const response = await axios.get(`${API_URL}/market/segments/${industry}`);
  return response.data;
}