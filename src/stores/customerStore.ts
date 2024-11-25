import { create } from 'zustand';
import { CustomerPersona } from '../types/customer';

interface CustomerState {
  personas: CustomerPersona[];
  selectedPersonaId: string | null;
  selectedPersona: CustomerPersona | null;
  addPersona: (persona: CustomerPersona) => void;
  updatePersona: (id: string, updates: Partial<CustomerPersona>) => void;
  selectPersona: (id: string) => void;
}

export const useCustomerStore = create<CustomerState>((set, get) => ({
  personas: [],
  selectedPersonaId: null,
  selectedPersona: null,
  
  addPersona: (persona) => {
    set((state) => ({
      personas: [...state.personas, persona],
    }));
  },
  
  updatePersona: (id, updates) => {
    set((state) => ({
      personas: state.personas.map((p) =>
        p.id === id ? { ...p, ...updates } : p
      ),
    }));
  },
  
  selectPersona: (id) => {
    set((state) => ({
      selectedPersonaId: id,
      selectedPersona: state.personas.find((p) => p.id === id) || null,
    }));
  },
}));