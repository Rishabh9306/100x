import React from 'react';
import { Users, Target, Brain, Heart } from 'lucide-react';
import { useCustomerStore } from '../../stores/customerStore';

export default function PersonaBuilder() {
  const { personas, addPersona, selectPersona } = useCustomerStore();

  const handleCreatePersona = () => {
    addPersona({
      id: crypto.randomUUID(),
      name: 'New Persona',
      demographics: {
        ageRange: '25-34',
        gender: 'Any',
        income: '$50,000-$100,000',
        education: "Bachelor's Degree",
        location: 'Urban Areas',
        occupation: 'Professional'
      },
      psychographics: {
        goals: [],
        challenges: [],
        values: [],
        interests: [],
        behaviors: []
      },
      buyingBehavior: {
        purchaseFrequency: 'Monthly',
        averageOrderValue: 0,
        preferredChannels: [],
        decisionFactors: []
      },
      painPoints: []
    });
  };

  return (
    <div className="card space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">Persona Builder</h3>
        <button
          onClick={handleCreatePersona}
          className="btn-primary flex items-center space-x-2"
        >
          <Users size={16} />
          <span>Create Persona</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {personas.map((persona) => (
          <div
            key={persona.id}
            onClick={() => selectPersona(persona.id)}
            className="p-4 border rounded-lg hover:border-navy-500 cursor-pointer transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold text-gray-900">{persona.name}</h4>
                <p className="text-sm text-gray-500">
                  {persona.demographics.occupation} • {persona.demographics.ageRange}
                </p>
              </div>
              <div className="flex space-x-2">
                <Target size={16} className="text-navy-500" />
                <Brain size={16} className="text-purple-500" />
                <Heart size={16} className="text-red-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}