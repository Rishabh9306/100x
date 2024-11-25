import { create } from 'zustand';
import { Competitor, CompetitiveAnalysis } from '../types/competitor';

interface CompetitorState {
  competitors: Competitor[];
  analysis: CompetitiveAnalysis | null;
  selectedCompetitorId: string | null;
  loading: boolean;
  error: string | null;
  fetchCompetitors: () => Promise<void>;
  addCompetitor: (competitor: Omit<Competitor, 'id'>) => Promise<void>;
  updateCompetitor: (id: string, updates: Partial<Competitor>) => Promise<void>;
  selectCompetitor: (id: string) => void;
}

export const useCompetitorStore = create<CompetitorState>((set, get) => ({
  competitors: [],
  analysis: null,
  selectedCompetitorId: null,
  loading: false,
  error: null,

  fetchCompetitors: async () => {
    set({ loading: true });
    try {
      const response = await fetch('http://localhost:3001/api/competitor/list');
      const data = await response.json();
      set({ competitors: data, loading: false });
    } catch (error) {
      set({ error: 'Failed to fetch competitors', loading: false });
    }
  },

  addCompetitor: async (competitor) => {
    set({ loading: true });
    try {
      const response = await fetch('http://localhost:3001/api/competitor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(competitor),
      });
      const newCompetitor = await response.json();
      set((state) => ({
        competitors: [...state.competitors, newCompetitor],
        loading: false,
      }));
    } catch (error) {
      set({ error: 'Failed to add competitor', loading: false });
    }
  },

  updateCompetitor: async (id, updates) => {
    set({ loading: true });
    try {
      const response = await fetch(`http://localhost:3001/api/competitor/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      });
      const updatedCompetitor = await response.json();
      set((state) => ({
        competitors: state.competitors.map((c) =>
          c.id === id ? updatedCompetitor : c
        ),
        loading: false,
      }));
    } catch (error) {
      set({ error: 'Failed to update competitor', loading: false });
    }
  },

  selectCompetitor: (id) => {
    set({ selectedCompetitorId: id });
  },
}));