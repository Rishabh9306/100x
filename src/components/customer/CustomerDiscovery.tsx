import React from 'react';
import PersonaBuilder from './PersonaBuilder';
import CustomerResearch from './CustomerResearch';
import { useCustomerStore } from '../../stores/customerStore';

export default function CustomerDiscovery() {
  const { selectedPersona } = useCustomerStore();

  return (
    <section id="customer-discovery" className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Customer Discovery</h2>
        <button className="btn-primary">Export Insights</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PersonaBuilder />
        {selectedPersona && <CustomerResearch persona={selectedPersona} />}
      </div>
    </section>
  );
}