import React from 'react';
import { ListChecks, Star, Clock, ArrowUp, ArrowDown } from 'lucide-react';

export default function FeaturePrioritization() {
  const features = [
    {
      id: '1',
      title: 'Advanced Analytics Dashboard',
      impact: 'high',
      effort: 'medium',
      priority: 'high',
      votes: 156
    },
    {
      id: '2',
      title: 'Custom Report Builder',
      impact: 'medium',
      effort: 'high',
      priority: 'medium',
      votes: 98
    },
    {
      id: '3',
      title: 'API Integration Hub',
      impact: 'high',
      effort: 'high',
      priority: 'medium',
      votes: 134
    }
  ];

  return (
    <div className="card space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">Feature Prioritization</h3>
        <button className="btn-primary">Add Feature</button>
      </div>

      <div className="space-y-4">
        {features.map((feature) => (
          <div key={feature.id} className="p-4 border rounded-lg">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-medium text-gray-900">{feature.title}</h4>
                <div className="flex items-center space-x-4 mt-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    feature.impact === 'high' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    Impact: {feature.impact}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    feature.effort === 'high' 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    Effort: {feature.effort}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star size={14} className="text-yellow-500" />
                    <span className="text-sm text-gray-500">{feature.votes} votes</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <ArrowUp size={16} className="text-green-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <ArrowDown size={16} className="text-red-500" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <ListChecks className="text-navy-500" size={20} />
            <span className="font-medium text-gray-700">Priority Matrix</span>
          </div>
          <div className="mt-2 h-32 bg-white rounded-lg"></div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <Clock className="text-navy-500" size={20} />
            <span className="font-medium text-gray-700">Timeline View</span>
          </div>
          <div className="mt-2 h-32 bg-white rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}