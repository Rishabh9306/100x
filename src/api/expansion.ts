import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export async function fetchExpansionOpportunities() {
  const response = await axios.get(`${API_URL}/expansion/opportunities`);
  return response.data;
}

export async function analyzeMarketFit(params: {
  region: string;
  industry: string;
}) {
  const response = await axios.post(`${API_URL}/expansion/market-fit`, params);
  return response.data;
}

export async function checkRegulatory(region: string) {
  const response = await axios.get(`${API_URL}/expansion/regulatory/${region}`);
  return response.data;
}