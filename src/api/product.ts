import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export async function fetchProductMetrics() {
  const response = await axios.get(`${API_URL}/product/metrics`);
  return response.data;
}

export async function submitFeatureRequest(request: {
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
}) {
  const response = await axios.post(`${API_URL}/product/features/request`, request);
  return response.data;
}

export async function fetchProductRoadmap() {
  const response = await axios.get(`${API_URL}/product/roadmap`);
  return response.data;
}