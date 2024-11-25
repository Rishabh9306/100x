import axios from 'axios';
import { Competitor, CompetitiveAnalysis } from '../types/competitor';

const API_URL = 'http://localhost:3001/api';

export async function fetchCompetitors(): Promise<Competitor[]> {
  const response = await axios.get(`${API_URL}/competitor/list`);
  return response.data;
}

export async function fetchCompetitiveAnalysis(): Promise<CompetitiveAnalysis> {
  const response = await axios.get(`${API_URL}/competitor/analysis`);
  return response.data;
}

export async function addCompetitor(competitor: Omit<Competitor, 'id'>) {
  const response = await axios.post(`${API_URL}/competitor`, competitor);
  return response.data;
}